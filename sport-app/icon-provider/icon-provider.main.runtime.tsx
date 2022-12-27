import React from 'react';
import { IconProviderAspect } from './icon-provider.aspect';
import { Aspect, RuntimeDefinition } from '@teambit/harmony';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { PreviewRuntime } from '@teambit/preview';

const IconsProvider = ({ children }) => (
  <>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round"
      rel="stylesheet"
    />
  </>
);

export class IconProviderMain {
  static dependencies: Aspect[] = [ReactAspect];

  static runtime: RuntimeDefinition = PreviewRuntime;

  static async provider([react]: [ReactPreview]) {
    const iconProviderMain = new IconProviderMain();

    react.registerProvider([IconsProvider]);

    return iconProviderMain;
  }
}

IconProviderAspect.addRuntime(IconProviderMain);

// export default IconProviderMain;
