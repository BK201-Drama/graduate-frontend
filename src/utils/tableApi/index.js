const getTableData = (myApi) => (pages, formData) => {
  const params = {
    page: pages.current,
    size: pages.pageSize,
    ...formData,
  }
  return myApi?.(params).then((res) => {
    const {
      data: {
        data: { list, count },
      },
    } = res
    return {
      list,
      count,
    }
  })
}

export default getTableData
