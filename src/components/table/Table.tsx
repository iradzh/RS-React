import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IHookDataProp, TableForm, ITableValues } from '../../interfaces';
import './Table.scss';

const Table = (prop: IHookDataProp) => {
  const data = useSelector((state: ITableValues) => state);

  const tablePrefix =
    prop.form === TableForm.HOOK ? TableForm.HOOK : TableForm.UNC;

  const age =
    prop.form === TableForm.UNC ? data.uncontrForm.age : data.hookData.age;
  const displayedAge = age || '';

  const tc =
    prop.form === TableForm.UNC ? data.uncontrForm.tc : data.hookData.tc;
  const displayedtc = tc ? 'Yes' : 'No';

  const [table] = useState([
    {
      id: tablePrefix + '_1',
      col1: 'Name: ',
      col2:
        prop.form === TableForm.UNC
          ? data.uncontrForm.name
          : data.hookData.name,
    },
    {
      id: tablePrefix + '_2',
      col1: 'Age: ',
      col2: displayedAge,
    },
    {
      id: tablePrefix + '_3',
      col1: 'E-mail: ',
      col2:
        prop.form === TableForm.UNC
          ? data.uncontrForm.email
          : data.hookData.email,
    },
    {
      id: tablePrefix + '_4',
      col1: 'Gender: ',
      col2:
        prop.form === TableForm.UNC
          ? data.uncontrForm.gender
          : data.hookData.gender,
    },
    {
      id: tablePrefix + '_5',
      col1: 'TC: ',
      col2: displayedtc,
    },
    {
      id: tablePrefix + '_6',
      col1: 'Image: ',
      col2:
        prop.form === TableForm.UNC ? (
          <img className="pic" src={data.uncontrForm.pic} />
        ) : (
          <img className="pic" src={data.hookData.pic} />
        ),
    },
  ]);

  return (
    <div className="table__wrapper">
      <h2>{prop.form === TableForm.HOOK ? TableForm.HOOK : TableForm.UNC}</h2>
      <table>
        <tbody>
          {table.map((row) => (
            <tr key={row.id}>
              <td className="table__title">{row.col1}</td>
              <td className="table__content">{row.col2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
