// type: info warn success error
var __this;
function init(context) {
    __this = context;
    __this.showToolTip = showToolTip;
    __this.closeToolTip = closeToolTip;
}

function iconColorForType(type) {
    switch(type) {
    case 'success':
    case 'info':
        return 'rgb(9,208,7)';
    case 'warn':
        return 'rgb(255,212,00)';
    case 'error':
        return 'rgb(244,102,102)';
    }
    return 'rgb(244,102,102)';
}

function iconTypeForType(type) {
    switch(type) {
    case 'info':
        return 'cancel';
    case 'warn':
        return 'cancel';
    case 'success':
        return 'success_circle';
    case 'error':
        return 'cancel';
    }
    return 'clear';
}

function createInAnimation(cb) {
    var anim = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-in', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
      delay: 0,
      transformOrigin: '50% 50% 0',
      success: function(res) {
        cb && cb(res);
      }
    });
    return anim;
}

function createOutAnimation(cb) {
    var anim = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-out', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
      delay: 0,
      transformOrigin: '50% 50% 0',
      success: function(res) {
        cb && cb(res);
      }
    });
    return anim;
}

/**
 * 关闭提示信息
 */
function closeToolTip() {
    if (!__this) {
        console.log('ToolTip not init! Please init with param [this]');
        return;
    }
    var outAnim = createOutAnimation();
    outAnim.translateY(-35).opacity(0).step();
    __this.data._toolTip_.animation = outAnim.export();
    __this.setData({
        _toolTip_: __this.data._toolTip_
    });
}

/**
 * 显示提示信息 type: success|info|warn|error
 */
function showToolTip(type, text, delay) {
    console.log('showToolTip => ', __this);
    if (!__this) {
        console.log('ToolTip not init! Please init with param [this]');
        return;
    }
    var clr = iconColorForType(type);
    var icon = iconTypeForType(type);
    var inAnim = createInAnimation();
    inAnim.translateY(35).opacity(1).step();
    __this.setData({
        _toolTip_: {
            type:type,
            info:text,
            color:clr,
            icon:icon,
            animation:inAnim.export()
        }
    });
    if (type === 'info' || type === 'success' || delay) {
        setTimeout(function() {
            closeToolTip();
        }.bind(__this), delay || 3000);
    }
}

module.exports = {
    showToolTip: showToolTip,
    closeToolTip: closeToolTip,
    init: init
};