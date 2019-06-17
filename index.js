export function dcx (node) {
  return function cx (...cns) {
    cns.reduce((arr, val) => {
      return arr.concat(
        typeof val === 'object' ? (
          Object.keys(val).map(cn => [cn, val[cn]])
        ) : (
          [[val, true]]
        )
      )
    }, []).map(def => {
      node.classList[def[1] ? 'add' : 'remove'](def[0])
    })
  }
}
