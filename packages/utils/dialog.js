import $ from 'jquery'
(function ($) {
  $.fn.dialogDrag = function (drag) {
    $(drag).mousedown(function (ev) {
      var offsetX = ev.pageX - $(this).position().left
      var offsetY = ev.pageY - $(this).position().top
      $(this).css('cursor', 'move')
      $(drag).mousemove(function (ev) {
        var x = ev.pageX - offsetX
        var y = ev.pageY - offsetY
        $(this).css({
          left: x,
          top: y
        })
      })
      ev.preventDefault()
    })
    $(document).mouseup(function () {
      $(drag).css('cursor', 'default')
      $(drag).off('mousemove')
    })
  }
})($)
