window.cb22 = function(data) {
  if (data.url.includes('https://yanchu.maoyan.com/myshow/ajax/v2/showTickets/validateStock') && data.status === 200) {
    const resData = JSON.parse(data.response)
    if (!(resData.code === 200 && resData.success === true)) {
      setTimeout(() => {
        document.querySelectorAll('.primary-btn-md')[0].click();
      }, 1000);
    }
  }
}

new VConsole();