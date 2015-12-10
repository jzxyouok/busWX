
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
        this.render();
    },

    render: function() {
        var stationList = new App.Collections.StationList;
        
        
        stationList.add(new App.Models.StationModel({'name':'成都校区'}));
        stationList.add(new App.Models.StationModel({'name':'峨眉校区1'}));
        stationList.add(new App.Models.StationModel({'name':'峨眉校区2'}));
        stationList.add(new App.Models.StationModel({'name':'峨眉校区3'}));
        stationList.add(new App.Models.StationModel({'name':'峨眉校区4'}));
        stationList.add(new App.Models.StationModel({'name':'峨眉校区5'}));
        stationList.add(new App.Models.StationModel({'name':'峨眉校区6'}));
        stationList.add(new App.Models.StationModel({'name':'峨眉校区7'}));
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
        this.seleteData = {
            date:{date:time.Format('yyyy-MM-dd'),show:time.Format("MM月d日 今天 ") + time.CHWeek()},
            station:[{name:stationList.models[0].get('name')},{name:stationList.models[1].get('name')}]
        };
        $(".select-form").html(template(this.seleteData));
        
        //下拉框
        this.selectList = _.template($("#selectStationTemplate").html())({list:stationList});
        App.loading();
    },

    startStation: function(){
        var that = this;
        $('#selectBox').removeClass('hide fadeOut').addClass('show fadeIn').find('.select-list').html(this.selectList).find('li').click(function(){
            that.seleteData.station[0].name = $(this).attr('data-real');
            $('#selectStart .select-station').html(that.seleteData.station[0].name);
            $('#selectBox').removeClass('show fadeIn').addClass('fadeOut');
        });

    },
    endStation:function(){
        var that = this;
        $('#selectBox').removeClass('hide fadeOut').addClass('show fadeIn').find('.select-list').html(this.selectList).find('li').click(function(){
            that.seleteData.station[1].name = $(this).attr('data-real');
            $('#selectEnd .select-station').html(that.seleteData.station[1].name);
            $('#selectBox').removeClass('show fadeIn').addClass('fadeOut');
        });
    },
    changeStation:function(){
        var that = this.seleteData.station[0];
        this.seleteData.station[0] = this.seleteData.station[1];
        this.seleteData.station[1] = that;
        $('#selectStart .select-station').html(this.seleteData.station[0].name);
        $('#selectEnd .select-station').html(this.seleteData.station[1].name);
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
            that.seleteData.date.date = $(this).attr('data-real');
            that.seleteData.date.show = $(this).text();
            $('#selectDate .ui-panel-title-tips').html($(this).text());
            $('#selectBox').removeClass('show fadeIn').addClass('fadeOut');
        });
    },
    selectSub:function(){
        console.log(this.seleteData);
        App.seleteData = this.seleteData;
        location.href='#select';
    }
});
