import { Coordinates, Outside } from './types';

export const getCoordinateWithLimits = (value: number, edge1: number, edge2: number): number => {
  if (edge1 > edge2) throw new Error(`edge2 must be more edge1. edge2: ${edge2}; edge1: ${edge1}`);
  if (value < edge1) return edge1;
  if (value > edge2) return edge2;
  return value;
};

export const getOutsideOfElement = (element: HTMLElement): Outside => {
  const rect = element.getBoundingClientRect();
  const outside: Outside = { x: null, y: null };
  if (rect.x < 0) outside.x = 'left';
  if (rect.y < 0) outside.y = 'top';
  if (rect.x + rect.width > window.innerWidth) outside.x = 'right';
  if (rect.y + rect.height > window.innerHeight) outside.y = 'bottom';
  return outside;
};

export const getShiftX = (element: HTMLElement, coordinates: Coordinates, outside: Outside): number => {
  const rect = element.getBoundingClientRect();
  if (outside.x === 'left') return coordinates.x - rect.x;
  if (outside.x === 'right') {
    const rightEdge = rect.x + rect.width;
    const outsideRight = rightEdge - window.innerWidth;
    return coordinates.x - outsideRight;
  }
  return coordinates.x;
};

export const getShiftY = (element: HTMLElement, coordinates: Coordinates, outside: Outside): number => {
  const rect = element.getBoundingClientRect();
  if (outside.y === 'top') return coordinates.y - rect.y;
  if (outside.y === 'bottom') {
    const bottomEdge = rect.y + rect.height;
    const outsideBottom = bottomEdge - window.innerHeight;
    return coordinates.y - outsideBottom;
  }
  return coordinates.y;
};

export const getCoordinatesForOutside = (element: HTMLElement, coordinates: Coordinates): Coordinates => {
  const outside = getOutsideOfElement(element);
  if (outside.x === null && outside.y === null) return coordinates;
  return {
    x: getShiftX(element, coordinates, outside),
    y: getShiftY(element, coordinates, outside),
  };
};
