/*! dzoom.JS - v0.0.1 - 2015-03-02
 *
 * Copyright (c) 2015 ChangYuan Lin;
 * Licensed under the MIT license 
 */

var dzoom = {
    // Here to provide additions and deletions to the style function style
    styleRule:{
        add:function(key,value){ 
            var css = document.styleSheets[document.styleSheets.length-1]; 
            css.cssRules ? 
            (css.insertRule(key+"{"+value+"}", css.cssRules.length)) : 
            (css.addRule(key,value)) ; 
        },
        remove:function(key){ 
            for(var i = 0; i < document.styleSheets.length; i++){ 
                var css = document.styleSheets[i]; 
                css.cssRules ? 
                    (function(){ 
                        for(var j = 0; j < css.cssRules.length; j++){ 
                            if(css.cssRules[j].selectorText==key){ 
                                css.deleteRule(j); 
                            }   
                        } 
                    })() : (css.removeRule(key)) ; 
            } 
        }
    },
    reset:function(){
        dzoom.styleRule.remove(".dzoom");
    },
    // the entrance
    render:function(type){
            
        //dzoom.reset();

        var actionDom;
        var scrollWidth;
        var widthType;
        var newStyle = "\
            -webkit-transform:scale({scale});\
            -webkit-transform-origin:0px 0px 0px;\
            margin:0px;\
            width:320px;\
        ";

        if(!document.querySelectorAll(".dzoom")[0]){
            console.warn(".dzoom is undefined, open the default settings");
            // If no dzoom DOM trees can be automatically action on body
            actionDom = "body";
        }else{
            actionDom = ".dzoom";
            newStyle = newStyle+"overflow:hidden;"
        }

        void function set(){
            dzoom.scale = window.innerWidth/320;
            dzoom.styleRule.add(actionDom,newStyle.replace("{scale}",dzoom.scale));
        }();

    },
    init:function(){
        var evt = "onorientationchange" in window ? "orientationchange" : "resize";
        window.addEventListener(evt, function(a) { 
            dzoom.render();
        }, false);
    }
};

dzoom.init();
// default to running
