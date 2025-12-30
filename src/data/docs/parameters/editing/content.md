## Editing and Binding Parameters

### Editing Parameters

1. Open the Parameters table
2. Click the **Edit** button
3. Modify the parameter values as needed
4. Confirm or cancel your changes

### Linking Parameters

You can link parameters together by referencing one parameter's variable name in another parameter's value.

#### Manual Linking

When editing a parameter value, you can reference another parameter by using its variable name. This creates a link where the value is dynamically pulled from the referenced parameter.

**Example:** If parameter `user_email` has the value "test@example.com", you can set another parameter's value to reference `user_email` so it always uses the same email.

#### Automatic Binding

Click the **Binding** button to automatically link parameters with identical text values:

1. Probium groups all parameters with the same value
2. For each group, the first parameter becomes the primary
3. The primary parameter retains its value unchanged
4. All other parameters in the group reference the primary parameter's name

> **Benefit:** Linking parameters means you only need to update one value, and all linked parameters will automatically use the new value.