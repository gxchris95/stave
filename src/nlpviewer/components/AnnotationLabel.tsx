<<<<<<< HEAD:src/nlpviewer/components/AnnotationLabel.tsx
import React, {memo} from 'react';
import {IAnnotationPosition, IAnnotation} from '../lib/interfaces';
=======
import React, { memo } from 'react';
import { IAnnotationPosition, IAnnotation } from '../lib/interfaces';
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486:src/components/AnnotationLabel.tsx
import style from '../styles/AnnotationLabel.module.css';
import {
  attributeId,
  displayAttributeInline,
  displayAttributeFloating,
} from '../lib/utils';

export interface AnnotationLabelProp {
  position: IAnnotationPosition;
  annotation: IAnnotation;
  isSelected: boolean;
  selectedLegendAttributeIds: string[];
}

function AnnotationLabel({
  position,
  annotation,
  isSelected,
  selectedLegendAttributeIds,
}: AnnotationLabelProp) {
<<<<<<< HEAD:src/nlpviewer/components/AnnotationLabel.tsx
  const attrKeys = Object.keys(annotation.attributes).filter(attrKey => {
=======
  const attrKeys = Object.keys(annotation.attributes).filter((attrKey) => {
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486:src/components/AnnotationLabel.tsx
    if (isSelected) {
      return true;
    } else {
      return (
        selectedLegendAttributeIds.indexOf(
          attributeId(annotation.legendId, attrKey)
        ) > -1
      );
    }
  });

  if (!attrKeys.length) {
    return null;
  }

  return (
    <div
      key={annotation.id}
      className={isSelected ? style.annotation_attr_container_selected : ''}
      style={{
        position: 'absolute',
        zIndex: isSelected ? 30 : 0,
<<<<<<< HEAD:src/nlpviewer/components/AnnotationLabel.tsx
        transform: 'translate(-50%, 0)',
=======
        transform: `translate(-50%, 0)`,
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486:src/components/AnnotationLabel.tsx
        top: position.rects[0].y + 20,
        left: position.rects[0].x + position.rects[0].width / 2,
        fontSize: 10,
        backgroundColor: 'white',
      }}
    >
      {position.rects.map((rect, i) => {
        return attrKeys.map((attrKey, j) => {
          return (
            <div
              className={
                isSelected
                  ? style.annotation_attr_rect_selected
                  : style.annotation_attr_rect
              }
              key={attrKey + i}
              style={{
                ...(!isSelected && {
                  top: j * 2,
                  left: j * 2,
                }),
              }}
            >
              {isSelected ? (
                <>
                  <span className={style.annotation_attr_label}>{attrKey}</span>
                  <span className={style.annotation_attr_value}>
                    {displayAttributeFloating(annotation.attributes[attrKey])}
                  </span>
                </>
              ) : (
                displayAttributeInline(annotation.attributes[attrKey])
              )}
            </div>
          );
        });
      })}
    </div>
  );
}

export default memo(AnnotationLabel);
