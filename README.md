# replaceByUniqueId

## Description

The `replaceByUniqueId` function is a utility for recursively searching through an object and replacing child objects based on a specified unique identifier property. It traverses through the object hierarchy and replaces any child object that has a matching unique identifier property with the provided replacement object.

## Installation

This function can be directly integrated into your TypeScript or JavaScript project.

## Usage

```typescript
import { replaceByUniqueId } from './replaceByUniqueId';

// Example usage:
const originalObject = {
  /* Your original object */
};
const replacementObject = {
  /* Object to replace matching objects */
};
const uniqueIdPropertyName = 'id'; // Optional, defaults to 'id'

const result = replaceByUniqueId(originalObject, replacementObject, uniqueIdPropertyName);
console.log(result);
```

## Parameters

- `originalObject` (type: `any`): The original object to search through for replacement.
- `replacementObject` (type: `any`): The object used to replace matching child objects found within the original object.
- `identifierProperty` (type: `string`, optional): The name of the unique identifier property. Defaults to `'id'`.

## Return Value

The function returns the modified original object with the replacements applied.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
