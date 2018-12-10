import { BehaviorSubject, fromEvent, merge } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const keyDown = fromEvent(document, 'keydown');
const shiftKeyDown = keyDown.pipe(
  filter(e => e.key === 'Shift'),
  map(() => true)
);

const keyUp = fromEvent(document, 'keyup');
const shiftKeyUp = keyUp.pipe(
  filter(e => e.key === 'Shift'),
  map(() => false)
);

export const shiftKey = new BehaviorSubject(false);

merge(shiftKeyDown, shiftKeyUp).subscribe(shiftKey);
