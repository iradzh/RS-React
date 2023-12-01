import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IHookDataProp, TableForm, ITableValues } from '../../interfaces';
import './Table.scss';

const Table = (prop: IHookDataProp) => {
  const data = useSelector((state: ITableValues) => state);

  const tablePrefix =
    prop.form === TableForm.HOOK ? TableForm.HOOK : TableForm.UNC;

  const [table] = useState([
    {
      id: tablePrefix + '_1',
      col1: 'Name: ',
      col2:
        prop.form === TableForm.HOOK
          ? data.uncontrForm.name
          : data.useFormData.name,
    },
    {
      id: tablePrefix + '_2',
      col1: 'Age: ',
      col2:
        prop.form === TableForm.HOOK
          ? data.useFormData.age
          : data.uncontrForm.age,
    },
    {
      id: tablePrefix + '_3',
      col1: 'E-mail: ',
      col2:
        prop.form === TableForm.HOOK
          ? data.useFormData.email
          : data.uncontrForm.email,
    },
    {
      id: tablePrefix + '_4',
      col1: 'Gender: ',
      col2:
        prop.form === TableForm.HOOK
          ? data.useFormData.gender
          : data.uncontrForm.gender,
    },
    {
      id: tablePrefix + '_5',
      col1: 'TC: ',
      col2:
        prop.form === TableForm.HOOK
          ? data.useFormData.tc
          : data.uncontrForm.tc,
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
