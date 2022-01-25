import './stylesheets/scale.css'

export function Scale ({notes, selected_note_index, scale_intervals}) {
  const ordered_notes = [...notes.slice(selected_note_index), ...notes.slice(0, selected_note_index)]
  let scale_notes = []
  scale_intervals.forEach(scale_interval => {
    scale_notes.push(ordered_notes[scale_interval])
  })
  return scale_notes
}

export function ScaleDisplay ({notes, selected_note_index, scale_intervals}) {
  const ordered_notes = [...notes.slice(selected_note_index), ...notes.slice(0, selected_note_index)]
  let scale_notes = []
  scale_intervals.forEach(scale_interval => {
    scale_notes.push(ordered_notes[scale_interval])
  })
  let rows = []
  scale_notes.forEach((scale_note, index) => {
    rows.push(<div key={scale_note} className="col-items">{scale_note}</div>)
    rows.push(<div key={index} className="col-items">-</div>)
  })
  rows.pop()
  return <div className="notes-displayer">
        <div className="wrapper">
        {rows}
    </div>
  </div>
}
