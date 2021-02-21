import React from 'react';
<<<<<<< HEAD:src/nlpviewer/components/LegendList.tsx
import {Dispatch} from '../contexts/text-viewer.context';
import {IEntryDefinition} from '../lib/interfaces';
import {attributeId} from '../lib/utils';
=======
import { Dispatch } from '../contexts/text-viewer.context';
import { IEntryDefinition } from '../lib/interfaces';
import { attributeId } from '../lib/utils';
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486:src/components/LegendList.tsx
import style from '../styles/LegendList.module.css';

interface LegendListProp {
  title: string;
<<<<<<< HEAD:src/nlpviewer/components/LegendList.tsx
  legends: (IEntryDefinition & {color: string})[];
=======
  legends: (IEntryDefinition & { color: string })[];
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486:src/components/LegendList.tsx
  selectedLegendIds: string[];
  selectedLegendAttributeIds: string[];
  dispatch: Dispatch;
}

export default function LegendList({
  title,
  legends,
  selectedLegendIds,
  selectedLegendAttributeIds,
  dispatch,
}: LegendListProp) {
  return (
    <div className={style.annotation_legend_container}>
      <h2>{title}</h2>
      <ul className={style.list}>
        {legends.map((legend, i) => {
          const isSelected = selectedLegendIds.indexOf(legend.entryName) > -1;

          return (
            <li key={legend.entryName + i}>
              <div
                className={style.lengend_container}
                onClick={() => {
                  isSelected
                    ? dispatch({
                        type: 'deselect-legend',
                        legendId: legend.entryName,
                      })
                    : dispatch({
                        type: 'select-legend',
                        legendId: legend.entryName,
                      });
                }}
              >
                <input type="checkbox" readOnly checked={isSelected} />
                <span
                  style={{
                    backgroundColor: legend.color,
                    color: 'white',
                  }}
                >
                  {legend.entryName.split('.').pop()}
                </span>
              </div>

              {legend.attributes ? (
                <div className={style.attribute_name_container}>
                  {legend.attributes.map(attr => {
                    const isSelected =
                      selectedLegendAttributeIds.indexOf(
                        attributeId(legend.entryName, attr.name)
                      ) > -1;

                    return (
                      <div
                        className={style.attribute_name}
                        key={attr.name}
                        onClick={() => {
                          isSelected
                            ? dispatch({
                                type: 'deselect-legend-attribute',
                                legendId: legend.entryName,
                                attributeId: attr.name,
                              })
                            : dispatch({
                                type: 'select-legend-attribute',
                                legendId: legend.entryName,
                                attributeId: attr.name,
                              });
                        }}
                      >
                        <input type="radio" readOnly checked={isSelected} />
                        {attr.name}
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
