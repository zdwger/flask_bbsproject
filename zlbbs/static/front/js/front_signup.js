$(function () {
    $("#captcha-img").click(function () {
        var self = $(this);
        var src = self.attr('src');
        var newsrc = zlparam.setParam(src, 'xx', Math.random())
        self.attr('src', newsrc)
    });
});

$(function () {
    ;$("\x23\x73\x6d\x73\x2d\x63\x61\x70\x74\x63\x68\x61\x2d\x62\x74\x6e")['\x63\x6c\x69\x63\x6b'](function (eHCfRF1) {
        eHCfRF1['\x70\x72\x65\x76\x65\x6e\x74\x44\x65\x66\x61\x75\x6c\x74']();
        var TsI_$2 = $(this);
        var ERW3 = $("\x69\x6e\x70\x75\x74\x5b\x6e\x61\x6d\x65\x3d\x27\x74\x65\x6c\x65\x70\x68\x6f\x6e\x65\x27\x5d")['\x76\x61\x6c']();
        if (!(/^1[345879]\d{9}$/['\x74\x65\x73\x74'](ERW3))) {
            zlalert['\x61\x6c\x65\x72\x74\x49\x6e\x66\x6f\x54\x6f\x61\x73\x74']('\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801\uff01')
            return
        }
        var ss4 = (new window["\x44\x61\x74\x65"])['\x67\x65\x74\x54\x69\x6d\x65']()
        var aTbmXeZMI5 = md5(ss4 + ERW3 + "\x71\x33\x34\x32\x33\x38\x30\x35\x67\x64\x66\x6c\x76\x62\x64\x66\x76\x68\x73\x64\x6f\x61\x60\x23\x24\x25")
        zlajax['\x70\x6f\x73\x74']({
            '\x75\x72\x6c': '\x2f\x63\x2f\x63\x6d\x73\x5f\x63\x61\x70\x74\x63\x68\x61\x2f',
            '\x64\x61\x74\x61': {
                '\x74\x65\x6c\x65\x70\x68\x6f\x6e\x65': ERW3,
                '\x74\x69\x6d\x65\x73\x74\x61\x6d\x70': ss4,
                '\x73\x69\x67\x6e': aTbmXeZMI5
            },
            '\x73\x75\x63\x63\x65\x73\x73': function (UK6) {
                if (UK6['\x63\x6f\x64\x65'] == 200) {
                    zlalert['\x61\x6c\x65\x72\x74\x53\x75\x63\x63\x65\x73\x73\x54\x6f\x61\x73\x74']('\u77ed\u4fe1\u9a8c\u8bc1\u7801\u53d1\u9001\u6210\u529f\uff01')
                    TsI_$2['\x61\x74\x74\x72']("\x64\x69\x73\x61\x62\x6c\x65\x64", '\x64\x69\x73\x61\x62\x6c\x65\x64');
                    var FgOGBskXV7 = 60;
                    var cfQkbrJs8 = setInterval(function () {
                        FgOGBskXV7--;
                        TsI_$2['\x74\x65\x78\x74'](FgOGBskXV7);
                        if (FgOGBskXV7 <= 0) {
                            TsI_$2['\x72\x65\x6d\x6f\x76\x65\x41\x74\x74\x72']('\x64\x69\x73\x61\x62\x6c\x65\x64');
                            clearInterval(cfQkbrJs8);
                            TsI_$2['\x74\x65\x78\x74']('\u53d1\u9001\u9a8c\u8bc1\u7801')
                        }
                    }, 1000)
                } else {
                    zlalert['\x61\x6c\x65\x72\x74\x49\x6e\x66\x6f\x54\x6f\x61\x73\x74'](UK6['\x6d\x65\x73\x73\x61\x67\x65'])
                }
            }
        })
    });
})

// $(function () {
// $("#sms-captcha-btn").click(function (event) {
//     event.preventDefault();
//     var self = $(this);
//     var telephone = $("input[name='telephone']").val();
//     if(!(/^1[345879]\d{9}$/.test(telephone))){
//         zlalert.alertInfoToast('请输入正确的手机号码！')
//         return;
//     }
//     var timestamp = (new Date).getTime()
//     var sign = md5(timestamp+telephone+"q3423805gdflvbdfvhsdoa`#$%")
//     zlajax.post({
//         'url': '/c/cms_captcha/',
//         'data': {
//             'telephone': telephone,
//             'timestamp': timestamp,
//             'sign': sign
//         },
//         'success': function (data) {
//             if(data['code'] == 200){
//                 zlalert.alertSuccessToast('短信验证码发送成功！')
//                 self.attr("disabled",'disabled');
//                 var timeCount = 60;
//                 var timer = setInterval(function () {
//                     timeCount--;
//                     self.text(timeCount);
//                     if(timeCount <= 0){
//                         self.removeAttr('disabled');
//                         clearInterval(timer);
//                         self.text('发送验证码')
//                     }
//                 },1000);
//             }else {
//                 zlalert.alertInfoToast(data['message'])
//             }
//         }
//     });
// });
// });

$(function () {
    $("#submit-btn").click(function (event) {
        event.preventDefault();
        var telephone_input = $("input[name='telephone']");
        var sms_captcha_input = $("input[name='sms_captcha']");
        var username_input = $("input[name='username']");
        var password1_input = $("input[name='password1']");
        var password2_input = $("input[name='password2']");
        var graph_captcha_input = $("input[name='graph_captcha']");

        var telephone = telephone_input.val();
        var sms_captcha = sms_captcha_input.val();
        var username = username_input.val();
        var password1 = password1_input.val();
        var password2 = password2_input.val();
        var graph_captcha = graph_captcha_input.val();

        zlajax.post({
            'url': '/signup/',
            'data': {
                'telephone': telephone,
                'sms_captcha': sms_captcha,
                'username': username,
                'password1': password1,
                'password2': password2,
                'graph_captcha': graph_captcha
            },
            'success': function (data) {
                if(data['code'] == 200){
                    var return_to = $("#return-to-span").text();
                    if (return_to){
                        window.location = return_to
                    }else {
                        window.location = '/'
                    }
                }else {
                    zlalert.alertInfo(data['message'])
                }
            },
            'fail': function () {
                zlalert.alertNetworkError()
            }
        })
    })
})