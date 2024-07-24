window.cb22 = function(data) {
  const urls = [
    'https://yanchu.maoyan.com/myshow/ajax/v2/showTickets/validateStock',
    'https://yanchu.maoyan.com/myshow/ajax/tx/order',
  ]
  const isContain = urls.some(item => data.url.includes(item))
  if (isContain && data.status === 200) {
    const resData = JSON.parse(data.response)
    if (!(resData.code === 200 && resData.success === true)) {
      setTimeout(() => {
        document.querySelectorAll('.primary-btn-md')[0].click()
      }, 1000)
    }
  }
}

new VConsole()