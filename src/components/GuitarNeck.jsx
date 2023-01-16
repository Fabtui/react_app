import { NOTES } from '../data/data'
import '../stylesheets/guitar_neck.css'
import { IntervalNamesRows, IntervalNotesRows } from './ScaleTable'
import React from 'react';

function GuitarNeckRows (special_notes, notes_displayed, selected_scale, selected_note_index, guitarStrings, selected_scale_notes, notes) {
  let rows = []
  guitarStrings.forEach((guitarString, index) => {
    const key = `${guitarString}-${index}`
    if (notes_displayed) {
      rows.push(<IntervalNotesRows key={key} special_notes={special_notes} selected_note_index={guitarString} selected_scale_notes={selected_scale_notes} notes={NOTES}/>)
    } else {
      rows.push(<IntervalNamesRows key={key} special_notes={special_notes} selected_scale={selected_scale} selected_note_index={selected_note_index} guitarString={guitarString} selected_scale_notes={selected_scale_notes} notes={ notes}/>)
    }
  });
  return rows
}

export function GuitarNeck ({special_notes, notes_displayed, selected_scale, selected_note_index,tuning, selected_scale_notes}) {
  const rows = GuitarNeckRows(special_notes, notes_displayed, selected_scale, selected_note_index, tuning, selected_scale_notes, NOTES)
  return  <React.Fragment>
            <table className="table guitar-neck-table">
              {rows}
            </table>
            <table className='table fretboard-marks-table'>
              <tbody>
                <tr className='fretboard-marks'>
                  <th>x</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>10</th>
                  <th>11</th>
                  <th>12</th>
                </tr>
              </tbody>
            </table>
          </React.Fragment>
}
