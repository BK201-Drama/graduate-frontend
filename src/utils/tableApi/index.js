const getTableData =
  (myApi, defaultData = {}) =>
  (pages, formData) => {
    const params = {
      page: pages.current,
      size: pages.pageSize,
      ...defaultData,
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
