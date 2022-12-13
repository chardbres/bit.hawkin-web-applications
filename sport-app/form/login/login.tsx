import React, { ReactNode } from 'react';
import { Card } from '@hawkin/sport-app.shared.card';
import { Column } from '@hawkin/sport-app.layout.column';

export type LoginProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Login({ children }: LoginProps) {
  return (
    <Card>
      <Column>
        <p>Test!</p>
      </Column>
    </Card>
  );
}
