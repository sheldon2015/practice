"use strict";$(function(){function t(t){var i=[];return t.forEach(function(t){i.push("\n             <div class='item' data-value="+t+">\n             "+t+"\n             <span class='cha'>×</span>\n             </div>\n             ")},this),i}var i={province:[{id:11e4,name:"北京"},{id:12e4,name:"天津"}],city:{110000:[{id:110100,name:"北京市"}],120000:[{id:120100,name:"天津市"}]},district:{110100:[{id:110101,name:"东城区"},{id:110102,name:"西城区"},{id:110105,name:"朝阳区"},{id:110106,name:"丰台区"},{id:110107,name:"石景山区"},{id:110108,name:"海淀区"},{id:110109,name:"门头沟区"},{id:110111,name:"房山区"},{id:110112,name:"通州区"},{id:110113,name:"顺义区"},{id:110114,name:"昌平区"},{id:110115,name:"大兴区"},{id:110116,name:"怀柔区"},{id:110117,name:"平谷区"},{id:110228,name:"密云县"},{id:110229,name:"延庆县"}],120100:[{id:120101,name:"和平区"},{id:120102,name:"河东区"},{id:120103,name:"河西区"},{id:120104,name:"南开区"},{id:120105,name:"河北区"},{id:120106,name:"红桥区"},{id:120110,name:"东丽区"},{id:120111,name:"西青区"},{id:120112,name:"津南区"},{id:120113,name:"北辰区"},{id:120114,name:"武清区"},{id:120115,name:"宝坻区"},{id:120116,name:"滨海新区"},{id:120221,name:"宁河县"},{id:120223,name:"静海县"},{id:120225,name:"蓟县"}]}};$("#edit").click(function(t){"保存"==$(this).text().trim()?$(this).text("编辑"):$(this).text("保存"),$(".location div").toggleClass("edit"),$(".edit .cha").click(function(t){var i=$(this).parent().remove().attr("data-value"),e=[];r.forEach(function(t,n){t.value.trim()!=i.trim()&&e.push(t)},this),r=e})}),document.querySelector(".diqu").addEventListener("click",function(t){$(".modal-section").show(),$(".place-setion").hide()},!1),document.querySelector("#return").addEventListener("click",function(t){if("保存"==$("#edit").text().trim())return void(confirm("请保存修改")&&$("#edit").click());$(".modal-section").click().hide(),$(".place-setion").show();var i=[];r.forEach(function(t){-1==i.indexOf(t.value)&&i.push(t.value)}),document.querySelector(".location-place").innerHTML=i.join(",")},!1);var e=i.province,n=[],a=document.querySelector(".province");e.forEach(function(t){n.push("<li\n                data-provinceName="+t.name+"\n                id="+t.id+">\n                "+t.name+"\n             </li >")},this),$(a).html(n.join(""));var d,r=[],c=document.querySelector(".city");$(a).on("click","li",function(t){t.stopPropagation(),!d||d.removeClass("selected"),$(this).addClass("selected"),d=$(this);var e=[],n=this.getAttribute("id"),a=i.city[n];e.push("<li\n                id="+n+"\n                data-provinceName="+this.getAttribute("data-provinceName")+"\n                class='default'>\n                全部\n            </li >"),a.forEach(function(t){e.push("<li\n                    parentId="+n+"\n                    data-provinceName="+this.getAttribute("data-provinceName")+"\n                    data-cityName="+t.name+"\n                    id="+t.id+">\n                    "+t.name+"\n                </li >")},this),$(c).html(e.join("")).show(),$(o).html("")});var s,o=document.querySelector(".district");$(c).on("click","li",function(e){e.stopPropagation(),!s||s.removeClass("selected"),$(this).addClass("selected"),s=$(this);var n=!1;if("全部"==this.textContent.trim()){r.forEach(function(t){t.provinceId==this.getAttribute("id")&&(t.value=this.getAttribute("data-provinceName"),t.cityId=null,t.districtId=null,n=!0)},this),n||r.push({provinceId:this.getAttribute("id"),cityId:null,districtId:null,value:this.getAttribute("data-provinceName")});var a=[];r.forEach(function(t){-1==a.indexOf(t.value)&&a.push(t.value)}),$(".location").html(t(a).join("")),$(o).html("")}var d=[],c=this.getAttribute("id"),u=i.district[c];if(u&&0!=u.length)d.push("<li\n                    parentId="+this.getAttribute("parentId")+"\n                    id="+c+"\n                    data-cityName="+this.getAttribute("data-cityName")+"\n                    class='default'>\n                    全部\n                </li >"),u.forEach(function(t){d.push("<li\n                        grandParentId="+this.getAttribute("parentId")+"\n                        parentId="+c+"\n                        data-districtName="+t.name+"\n                        id="+t.id+">\n                        "+t.name+"\n                    </li >")},this),$(o).html(d.join("")).show();else if(!u&&"全部"!=this.textContent.trim()){r.forEach(function(t){t.provinceId==this.getAttribute("parentId")&&t.cityId==this.getAttribute("id")?(t.value=this.getAttribute("data-cityName"),t.districtId=null,n=!0):t.provinceId!=this.getAttribute("parentId")||t.cityId||(t.value=this.getAttribute("data-cityName"),t.cityId==this.getAttribute("id"),t.districtId=null,n=!0)},this),n||r.push({provinceId:this.getAttribute("parentId"),cityId:this.getAttribute("id"),districtId:null,value:this.getAttribute("data-cityName")});var a=[];r.forEach(function(t){-1==a.indexOf(t.value)&&a.push(t.value)}),$(".location").html(t(a).join("")),$(o).html("")}}),$(o).on("click","li",function(i){i.stopPropagation(),"全部"==this.textContent.trim()?$(this).siblings().removeClass("selected"):$(this).siblings(".default").removeClass("selected"),$(this).addClass("selected");var e=!1;"全部"==this.textContent.trim()?(r.forEach(function(t){t.provinceId==this.getAttribute("parentId")&&t.cityId==this.getAttribute("id")?(t.value=this.getAttribute("data-cityName"),t.districtId=null,e=!0):t.provinceId!=this.getAttribute("parentId")||t.cityId||(t.value=this.getAttribute("data-cityName"),t.cityId==this.getAttribute("id"),t.districtId=null,e=!0)},this),e||r.push({provinceId:this.getAttribute("parentId"),cityId:this.getAttribute("id"),districtId:null,value:this.getAttribute("data-cityName")})):(r.forEach(function(t,i){t.provinceId==this.getAttribute("grandParentId")&&t.cityId==this.getAttribute("parentId")&&t.districtId==this.getAttribute("id")?($(this).removeClass("selected"),r.splice(i,1),e=!0):t.provinceId!=this.getAttribute("grandParentId")||t.cityId!=this.getAttribute("parentId")||t.districtId?t.provinceId!=this.getAttribute("grandParentId")||t.cityId||t.districtId||(t.cityId==this.getAttribute("parentId"),t.districtId=this.getAttribute("id"),t.value=this.getAttribute("data-districtName"),e=!0):(t.value=this.getAttribute("data-districtName"),t.districtId=this.getAttribute("id"),e=!0)},this),e||r.push({provinceId:this.getAttribute("grandParentId"),cityId:this.getAttribute("parentId"),districtId:this.getAttribute("id"),value:this.getAttribute("data-districtName")}));var n=[];r.forEach(function(t){-1==n.indexOf(t.value)&&n.push(t.value)}),$(".location").html(t(n).join(""))});var u=$(".head");u.on("click",function(t){return"保存"==$("#edit").text().trim()?void(confirm("请保存修改")&&$("#edit").click()):(t.stopPropagation(),void $(this).next().show())}),$(".modal-section").on("click",function(t){$(".province,.city,.district").is(":visible")&&($(".province,.city,.district").hide(),$(".selected").removeClass("selected"),$(c).html(""),$(o).html(""))})});