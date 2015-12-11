
'use strict';
App.Views.StationView = Backbone.View.extend({
    el: $(".select-form"),
    events: {
        'click #selectStart': 'startStation',
        'click #selectEnd': 'endStation',
        'click #selectChange': 'changeStation',
        'click #selectDate': 'selectDate',
        'click #selectSub': 'selectSub',
    },
    initialize: function(){
        if(App.tickets)App.tickets=null;
        this.render();
    },

    render: function() {
        App.stationList = new App.Collections.StationList;
        
        
        App.stationList.add(new App.Models.StationModel({'name':'成都校区'}));
        App.stationList.add(new App.Models.StationModel({'name':'峨眉校区1'}));
        App.stationList.add(new App.Models.StationModel({'name':'峨眉校区2'}));
        App.stationList.add(new App.Models.StationModel({'name':'峨眉校区3'}));
        App.stationList.add(new App.Models.StationModel({'name':'峨眉校区4'}));
        App.stationList.add(new App.Models.StationModel({'name':'峨眉校区5'}));
        App.stationList.add(new App.Models.StationModel({'name':'峨眉校区6'}));
        App.stationList.add(new App.Models.StationModel({'name':'峨眉校区7'}));
        /*stationList.fetch({url:'/getStations/',success:function(collection,response){  
            collection.each(function(station){
                alert(station.get('name'));  
            });
        },error:function(){
            alert('error');
        }});*/
        //使用underscore这个库，来编译模板
        var template = _.template($("#selectFormTemplate").html());

        //加载模板到对应的el属性中

        //this.el.html(template);
        //界面
        var time = new Date();
        this.selectData = {
            date:{date:time.Format('yyyy-MM-dd'),show:time.Format("MM月d日 今天 ") + time.CHWeek()},
            station:[{name:App.stationList.models[0].get('name')},{name:App.stationList.models[1].get('name')}]
        };
        $(".select-form").html(template(App.selectData?App.selectData:this.selectData));
        
        //下拉框
        this.selectList = _.template($("#selectStationTemplate").html())({list:App.stationList});
        App.loading();
    },

    startStation: function(){
        var that = this;
        $('#selectBox').removeClass('hide fadeOut').addClass('show fadeIn').find('.select-list').html(this.selectList).find('li').click(function(){
            that.selectData.station[0].name = $(this).attr('data-real');
            $('#selectStart .select-station').html(that.selectData.station[0].name);
            $('#selectBox').removeClass('show fadeIn').addClass('fadeOut');
        });

    },
    endStation:function(){
        var that = this;
        $('#selectBox').removeClass('hide fadeOut').addClass('show fadeIn').find('.select-list').html(this.selectList).find('li').click(function(){
            that.selectData.station[1].name = $(this).attr('data-real');
            $('#selectEnd .select-station').html(that.selectData.station[1].name);
            $('#selectBox').removeClass('show fadeIn').addClass('fadeOut');
        });
    },
    changeStation:function(){
        var that = this.selectData.station[0];
        this.selectData.station[0] = this.selectData.station[1];
        this.selectData.station[1] = that;
        $('#selectStart .select-station').html(this.selectData.station[0].name);
        $('#selectEnd .select-station').html(this.selectData.station[1].name);
        /*$('.select-station').addClass('animated bounceOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
            
            $('.select-station').removeClass('bounceOut').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
                $(this).removeClass('animated bounceIn')
            });
        });*/
    },
    selectDate:function(){
        var now = new Date(),html = '',that = this;
        for(var i=0;i<App.DayLimit;i++){
            var time = new Date(now.getTime() + 24*60*60*1000*i);
            html += '<li data-real="'+time.Format('yyyy-MM-dd')+'"><a>' + time.Format("MM月d日");
            if(i==0) html+=' 今天';
            else if(i==1) html+=' 明天';
            else if(i==2) html+=' 后天';
            html += ' ' +  time.CHWeek() + '</a></li>';
        }
        $('#selectBox').removeClass('hide fadeOut').addClass('show fadeIn').find('.select-list').html(html).find('li').click(function(){
            that.selectData.date.date = $(this).attr('data-real');
            that.selectData.date.show = $(this).text();
            $('#selectDate .ui-panel-title-tips').html($(this).text());
            $('#selectBox').removeClass('show fadeIn').addClass('fadeOut');
        });
    },
    selectSub:function(){
        console.log(this.selectData);
        
        if(this.selectData.station[0].name == this.selectData.station[1].name)
        {
            $.tips({
                content:'始发站和终点站不可以相同',
                stayTime:2000,
                type:"warn"
            })
            return;
        }else{
            App.selectData = this.selectData;
            location.href='#select';
        }
    }
});
