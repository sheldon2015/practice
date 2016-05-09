$(function () {
    var place = {
        "province": [
            {
                "id": 110000,
                "name": "北京"
            },
            {
                "id": 120000,
                "name": "天津"
            }
        ],
        "city": {
            "110000": [
                {
                    "id": 110100,
                    "name": "北京市"
                }
            ],
            "120000": [
                {
                    "id": 120100,
                    "name": "天津市"
                }
            ]
        },
        "district": {
            "110100": [
                {
                    "id": 110101,
                    "name": "东城区"
                },
                {
                    "id": 110102,
                    "name": "西城区"
                },
                {
                    "id": 110105,
                    "name": "朝阳区"
                },
                {
                    "id": 110106,
                    "name": "丰台区"
                },
                {
                    "id": 110107,
                    "name": "石景山区"
                },
                {
                    "id": 110108,
                    "name": "海淀区"
                },
                {
                    "id": 110109,
                    "name": "门头沟区"
                },
                {
                    "id": 110111,
                    "name": "房山区"
                },
                {
                    "id": 110112,
                    "name": "通州区"
                },
                {
                    "id": 110113,
                    "name": "顺义区"
                },
                {
                    "id": 110114,
                    "name": "昌平区"
                },
                {
                    "id": 110115,
                    "name": "大兴区"
                },
                {
                    "id": 110116,
                    "name": "怀柔区"
                },
                {
                    "id": 110117,
                    "name": "平谷区"
                },
                {
                    "id": 110228,
                    "name": "密云县"
                },
                {
                    "id": 110229,
                    "name": "延庆县"
                }
            ],
            "120100": [
                {
                    "id": 120101,
                    "name": "和平区"
                },
                {
                    "id": 120102,
                    "name": "河东区"
                },
                {
                    "id": 120103,
                    "name": "河西区"
                },
                {
                    "id": 120104,
                    "name": "南开区"
                },
                {
                    "id": 120105,
                    "name": "河北区"
                },
                {
                    "id": 120106,
                    "name": "红桥区"
                },
                {
                    "id": 120110,
                    "name": "东丽区"
                },
                {
                    "id": 120111,
                    "name": "西青区"
                },
                {
                    "id": 120112,
                    "name": "津南区"
                },
                {
                    "id": 120113,
                    "name": "北辰区"
                },
                {
                    "id": 120114,
                    "name": "武清区"
                },
                {
                    "id": 120115,
                    "name": "宝坻区"
                },
                {
                    "id": 120116,
                    "name": "滨海新区"
                },
                {
                    "id": 120221,
                    "name": "宁河县"
                },
                {
                    "id": 120223,
                    "name": "静海县"
                },
                {
                    "id": 120225,
                    "name": "蓟县"
                }
            ]
        }
    }
    function _handeleArray(array) {
        var html_el = [];
        array.forEach(function (el) {
            html_el.push(
                `
             <div class='item' data-value=${el}>
             ${el}
             <span class='cha'>×</span>
             </div>
             `
            );
        }, this);
        return html_el;
    }
    //编辑
    $('#edit').click(function (e) {
        $(this).text().trim() == '保存' ? $(this).text("编辑") : $(this).text("保存");
        $('.location div').toggleClass('edit');
        //删除
        $('.edit .cha').click(function (par) {
            var value = $(this).parent().remove().attr('data-value');
            var temp = [];
            name.forEach(function (el, index) {
                if (el.value.trim() == value.trim()) {
                    return;
                } else {
                    temp.push(el)
                }
            }, this);
            name = temp;
        })
    })
    //地区diqu
    document.querySelector('.diqu').addEventListener('click', function (params) {
        $('.modal-section').show();
        $('.place-setion').hide();
    }, false)

    document.querySelector('#return').addEventListener('click', function (params) {
        if ($('#edit').text().trim() == '保存') {
            if (confirm("请保存修改")) {
                $('#edit').click();
            }
            return;
        }
        $('.modal-section').click().hide();
        $('.place-setion').show();
        var names = [];
        name.forEach(function (el) {
            if (names.indexOf(el.value) == -1) {
                names.push(el.value)
            }
        })
        document.querySelector('.location-place').innerHTML = names.join(',');
    }, false)
    // 初始化province
    var province = place.province;//得到省
    var province_list = [];
    var province_el = document.querySelector(".province");
    province.forEach(function (el) {
        province_list.push(//省的id    110000
            `<li
                data-provinceName=${el.name}
                id=${el.id}>
                ${el.name}
             </li >`
        )
    }, this);
    $(province_el).html(province_list.join(""));
    //切换城市赋值
    //选择的地点
    var name = [];
    var city_el = document.querySelector(".city");
    var $slected_province;
    $(province_el).on('click', 'li', function (e) {
        e.stopPropagation();
        !$slected_province || $slected_province.removeClass('selected');
        $(this).addClass('selected');
        $slected_province = $(this)
        var city_list = [];
        var id = this.getAttribute("id");// 省的id  110000
        var city = place.city[id];//有省的id，拿到城市
        city_list.push(//省的id 110000
            `<li
                id=${id}
                data-provinceName=${this.getAttribute('data-provinceName')}
                class='default'>
                全部
            </li >`
        )
        city.forEach(function (el) {
            city_list.push(// 省的id:parentId，市的id:el.id   110100
                `<li
                    parentId=${id}
                    data-provinceName=${this.getAttribute('data-provinceName')}
                    data-cityName=${el.name}
                    id=${el.id}>
                    ${el.name}
                </li >`
            )
        }, this);
        $(city_el).html(city_list.join("")).show();
        $(district_el).html('');
    })
    //切换地区赋值
    var district_el = document.querySelector(".district");
    var $slected_city;
    $(city_el).on('click', 'li', function (e) {
        e.stopPropagation();
        !$slected_city || $slected_city.removeClass('selected');
        $(this).addClass('selected');
        $slected_city = $(this);
        var flag = false;//查找是否存在覆盖
        if (this.textContent.trim() == '全部') {
            name.forEach(function (el) {
                //比如湖北省去覆盖下面的
                //覆盖 1.湖北省 武汉市 汉口
                //覆盖 2.湖北省  武汉市
                if (el.provinceId == this.getAttribute('id')) {
                    el.value = this.getAttribute('data-provinceName');
                    el.cityId = null;
                    el.districtId = null;
                    flag = true;
                }
            }, this);
            if (!flag) {
                //不覆盖的情况
                name.push({
                    provinceId: this.getAttribute('id'),
                    cityId: null,
                    districtId: null,
                    value: this.getAttribute('data-provinceName')
                });
            }
            var names = [];
            name.forEach(function (el) {
                if (names.indexOf(el.value) == -1) {
                    names.push(el.value)
                }
            })
            $('.location').html(_handeleArray(names).join(''));
            $(district_el).html('');
        }
        var district_list = [];
        var id = this.getAttribute("id");//点击为市id
        var district = place.district[id];
        //district有值且不为[]
        if (district && district.length != 0) {
            district_list.push(//parentId省的id, id市的id
                `<li
                    parentId=${this.getAttribute('parentId')}
                    id=${id}
                    data-cityName=${this.getAttribute('data-cityName')}
                    class='default'>
                    全部
                </li >`
            )
            district.forEach(function (el) {
                district_list.push(// 市的id:parentId，区的id:el.id
                    `<li
                        grandParentId=${this.getAttribute('parentId')}
                        parentId=${id}
                        data-districtName=${el.name}
                        id=${el.id}>
                        ${el.name}
                    </li >`
                )
            }, this);
            $(district_el).html(district_list.join(""))
                .show();
        } else if (!district && this.textContent.trim() != '全部') {
            name.forEach(function (el) {
                if (el.provinceId == this.getAttribute('parentId')
                    && el.cityId == this.getAttribute('id')) {
                    el.value = this.getAttribute('data-provinceName');
                    el.districtId = null;
                    flag = true;
                }
                else if (el.provinceId == this.getAttribute('parentId')
                    && !el.cityId) {
                    el.value = this.getAttribute('data-provinceName');
                    el.cityId == this.getAttribute('id');
                    el.districtId = null;
                    flag = true;
                }
            }, this);
            if (!flag) {
                //不覆盖的情况
                name.push({
                    provinceId: this.getAttribute('parentId'),
                    cityId: this.getAttribute('id'),
                    districtId: null,
                    value: this.getAttribute('data-provinceName')
                });
            }
            var names = [];
            name.forEach(function (el) {
                if (names.indexOf(el.value) == -1) {
                    names.push(el.value)
                }
            })
            $('.location').html(_handeleArray(names).join(''));
            $(district_el).html('');
        }

    })
    $(district_el).on('click', 'li', function (e) {
        e.stopPropagation();
        if (this.textContent.trim() == '全部') {
            $(this).siblings().removeClass('selected');
        } else {
            $(this).siblings('.default').removeClass('selected');
        }
        $(this).addClass('selected');
        var flag = false;//查找是否存在覆盖
        if (this.textContent.trim() == '全部') {
            //比如   湖北省 武汉市 去覆盖下面的
            //覆盖 1.湖北省 武汉市 汉口
            //覆盖 2.湖北省
            name.forEach(function (el) {
                //覆盖 三级地区的情况
                if (el.provinceId == this.getAttribute('parentId') &&
                    el.cityId == this.getAttribute('id')) {
                    el.value = this.getAttribute('data-cityName');
                    el.districtId = null;
                    flag = true;
                    //覆盖一级区域的情况
                } else if (el.provinceId == this.getAttribute('parentId')
                    && !el.cityId) {
                    el.value = this.getAttribute('data-cityName');
                    el.cityId == this.getAttribute('id');
                    el.districtId = null;
                    flag = true;
                }
            }, this);
            if (!flag) {
                //不覆盖的情况
                name.push({
                    provinceId: this.getAttribute('parentId'),
                    cityId: this.getAttribute('id'),
                    districtId: null,
                    value: this.getAttribute('data-cityName')
                });
            }

        } else {
            //比如   湖北省 武汉市 武昌 去覆盖下面的
            //覆盖 1.湖北省 武汉市
            //覆盖 2.湖北省
            name.forEach(function (el, index) {
                //覆盖三级地区的情况
                if (el.provinceId == this.getAttribute('grandParentId') &&
                    el.cityId == this.getAttribute('parentId') &&
                    el.districtId == this.getAttribute('id')
                ) {

                    $(this).removeClass('selected');
                    name.splice(index, 1);
                    flag = true;
                    // //覆盖 二级地区的情况
                } else if (el.provinceId == this.getAttribute('grandParentId') &&
                    el.cityId == this.getAttribute('parentId') &&
                    !el.districtId
                ) {
                    el.value = this.getAttribute('data-districtName');
                    el.districtId = this.getAttribute('id');
                    flag = true;
                    //覆盖一级区域的情况
                } else if (el.provinceId == this.getAttribute('grandParentId')
                    && !el.cityId
                    && !el.districtId
                ) {
                    el.cityId == this.getAttribute('parentId')
                    el.districtId = this.getAttribute('id');
                    el.value = this.getAttribute('data-districtName');
                    flag = true;
                }
            }, this);
            if (!flag) {
                //不覆盖的情况
                name.push({
                    provinceId: this.getAttribute('grandParentId'),
                    cityId: this.getAttribute('parentId'),
                    districtId: this.getAttribute('id'),
                    value: this.getAttribute('data-districtName')
                });
            }
        }
        var names = [];
        name.forEach(function (el) {
            if (names.indexOf(el.value) == -1) {
                names.push(el.value)
            }
        })
        $('.location').html(_handeleArray(names).join(''));
    })
    //点击列表头，list显示
    var $head = $('.head');
    $head.on('click', function (e) {
        if ($('#edit').text().trim() == '保存') {
            if (confirm("请保存修改")) {
                $('#edit').click();
            }
            return;
        }
        e.stopPropagation();
        $(this).next().show();
    })
    //点击空白处，收起list
    $('.modal-section').on('click', function (e) {
        if ($('.province,.city,.district').is(':visible')) {
            $('.province,.city,.district').hide();
            $('.selected').removeClass('selected');
            $(city_el).html('');
            $(district_el).html('');
        }
    })











































})