<<<<<<< HEAD:src/nlpviewer/components/LinkEditConnector.tsx
import React, {useState, useEffect, memo} from 'react';
import {IAnnotationPosition} from '../lib/interfaces';
import {useTextViewerDispatch} from '../contexts/text-viewer.context';
=======
import React, { useState, useEffect, memo } from 'react';
import { IAnnotationPosition } from '../lib/interfaces';
import { useTextViewerDispatch } from '../contexts/text-viewer.context';
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486:src/components/LinkEditConnector.tsx
import LineWithArrow from './LineWithArrow';

export interface LinkEditConnectorProp {
  position: IAnnotationPosition;
  offsetX: number;
  offsetY: number;
}

function LinkEditConnector({
  position,
  offsetX,
  offsetY,
}: LinkEditConnectorProp) {
  const dispatch = useTextViewerDispatch();
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    let moved = false;

    function updatePos(e: MouseEvent) {
      moved = true;
      requestAnimationFrame(() => {
<<<<<<< HEAD:src/nlpviewer/components/LinkEditConnector.tsx
        setPos({x: e.clientX, y: e.clientY});
=======
        setPos({ x: e.clientX, y: e.clientY });
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486:src/components/LinkEditConnector.tsx
      });
    }

    function endMove() {
      dispatch({type: 'stop-create-link-dragging', hasMoved: moved});
    }

    window.addEventListener('mousemove', updatePos);
    window.addEventListener('mouseup', endMove);

    return () => {
      window.removeEventListener('mousemove', updatePos);
      window.removeEventListener('mouseup', endMove);
    };
  }, [dispatch]);

  const isMoved = pos.x !== 0 || pos.y !== 0;
  if (!isMoved) return null;

<<<<<<< HEAD:src/nlpviewer/components/LinkEditConnector.tsx
  const x = position.rects[0].x + position.rects[0].width;
  const y = position.rects[0].y;
=======
  let x = position.rects[0].x + position.rects[0].width;
  let y = position.rects[0].y;
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486:src/components/LinkEditConnector.tsx

  const fromPos = {
    x,
    y,
  };

  const toPos = {
    x: pos.x - offsetX,
    y: pos.y - offsetY,
  };

  return <LineWithArrow fromPos={fromPos} toPos={toPos} />;
}

export default memo(LinkEditConnector);
