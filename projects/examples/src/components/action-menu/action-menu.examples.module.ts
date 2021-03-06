/*!
 * Copyright 2019 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { NgModule } from '@angular/core';

import { ActionMenuComponent } from '@vcd/ui-components';
import { Documentation } from '@vmw/ng-live-docs';
import { ActionMenuSearchPauseUnpauseExampleComponent } from './action-menu-search-pause-and-unpause.example.component';
import { ActionMenuSearchPauseAndUnpauseExampleModule } from './action-menu-search-pause-and-unpause.example.module';
import { ActionMenuWithSeparatorsExampleComponent } from './action-menu-with-separators.example.component';
import { ActionMenuWithSeparatorsExampleModule } from './action-menu-with-separators.example.module';
import { ActionMenuExampleComponent } from './action-menu.example.component';

Documentation.registerDocumentationEntry({
    component: ActionMenuComponent,
    displayName: 'Action menu',
    urlSegment: 'action-menu',
    examples: [
        {
            component: ActionMenuExampleComponent,
            forComponent: null,
            title: 'Action Menu example',
            urlSegment: 'action-menu',
        },
        {
            component: ActionMenuWithSeparatorsExampleComponent,
            forComponent: null,
            title: 'Action Menu with separators',
            urlSegment: 'action-menu-with-separators',
        },
        {
            component: ActionMenuSearchPauseUnpauseExampleComponent,
            forComponent: null,
            title: 'Action search pause and unpause',
            urlSegment: 'action-search-pause-unpause',
        },
    ],
});

@NgModule({
    imports: [ActionMenuWithSeparatorsExampleModule, ActionMenuSearchPauseAndUnpauseExampleModule],
})
export class ActionMenuExamplesModule {}
