import React, {useState, useEffect} from 'react'
import './stylesheets/all_scales.css'

function useFetch (url) {
  const [state, setState] = useState({
    items: [],
    loading: true
  })

  useEffect(function () {
    (async function () {
      const response = await fetch(url)
      const responseData = await response.json()
      if (response.ok) {
        const data = responseData.presets
        data.map(d => {
          const valuesArray = d.Value.split(';');
          const newValuesArray = valuesArray.map(v => v = v -1)
          d.Value = newValuesArray.join(',');
          return d
        });
        setState({
          items: data,
          loading: false
        })
      } else {
        alert(JSON.stringify(responseData))
        setState(state => ({...state, loading: false}))
      }
    })()
  }, [])

  return [state.loading, state.items]
}

function ScaleTable () {
  const [loading, items] = useFetch('https://gist.githubusercontent.com/guitarpickfm/2caf3f4ecc6efd7f07df958b1a245b8e/raw/83d84c61ba6119e7df9257c0bc41d96f03d968f0/Scales.json')

  if (loading) {
    return <div>
      <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    </div>
  }

  return <div className='all-scales-table'>
  <div className='up-arrow-container'>
    <UpArrow/>
  </div>
  <table className='table'>
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Intervals</th>
        <th scope="col">Group</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item, index) => <tr key={index}>
        <td>{item.Name}</td>
        <td>{item.Value}</td>
        <td>{item.Group}</td>
      </tr>)}
    </tbody>
  </table>
  </div>
}

function UpArrow () {
  function scrollToTop () {
    window.scrollTo(0, 0)
  }

  window.addEventListener('scroll', (e) => {
    const arrow = document.querySelector('.fa-arrow-circle-up')
    if ( window.pageYOffset > 200 ) {
      arrow.style.opacity= '1'
      arrow.style.pointerEvents= ''
    } else {
      arrow.style.opacity= '0'
      arrow.style.pointerEvents= 'none';
    }
  })

  return <i onClick={scrollToTop} className="fas fa-arrow-circle-up"></i>
}


export function AllScales () {
  const [scaleVisible, toggleScale] = useToggle(false)
  // const [styles, toggleStyles] = useToggleStyle(false)

  function useToggle (init = false) {
    const [value, setValue] = useState(init)

    const toggleScale = function () {
      setValue(value => !value)
    }

    return [value, toggleScale]
  }

  const styles = scaleVisible ? {opacity: '1'} : {opacity: '0'}

  return <div className='container'>
          <div className='all-scales-table'>
            <label className="scaleCheckbox">
            <input htmlFor="scaleCheckbox" type="checkbox" onChange={toggleScale} checked={scaleVisible}></input>
            All Scales</label>
            <div className='all-scales' style={styles}>
            {scaleVisible && <ScaleTable/>}
            </div>
          </div>
          </div>
}
