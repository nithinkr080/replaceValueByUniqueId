export function replaceValueByUniqueId(
  originalObject: any,
  replacement: any,
  identifierProperty: string = 'id',
) {
  if (typeof originalObject === 'object') {
    for (const key in originalObject) {
      if (originalObject[key][identifierProperty] == replacement[identifierProperty]) {
        originalObject[key] = replacement;
      }
      replaceValueByUniqueId(originalObject[key], replacement, identifierProperty);
    }
  }
  return originalObject;
}
