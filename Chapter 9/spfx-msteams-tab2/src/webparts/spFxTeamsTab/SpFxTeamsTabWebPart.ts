import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './SpFxTeamsTabWebPart.module.scss';
import * as strings from 'SpFxTeamsTabWebPartStrings';
import * as microsoftTeams from '@microsoft/teams-js';

export interface ISpFxTeamsTabWebPartProps {
  description: string;
}

export default class SpFxTeamsTabWebPart extends BaseClientSideWebPart <ISpFxTeamsTabWebPartProps> {
  private _context: microsoftTeams.Context;

  public render(): void {
    let webPartTitle: string = '';  
    let siteTitle: string = '';  
    
    if (this._context) {  
      // Teams Context 
      webPartTitle = "Welcome to Teams!";  
      siteTitle = "Teams Name: " + this._context.teamName;  
    }  
    else  
    {  
      // SharePoint Context  
      webPartTitle = "Welcome to SharePoint!";  
      siteTitle = "SharePoint site: " + this.context.pageContext.web.title;  
    }

    this.domElement.innerHTML = `
      <div class="${ styles.spFxTeamsTab }">
    <div class="${ styles.container }">
      <div class="${ styles.row }">
        <div class="${ styles.column }">
          <span class="${ styles.title }">${webPartTitle}</span>
  <p class="${ styles.subTitle }">${siteTitle}</p>
    <p class="${ styles.description }">${escape(this.properties.description)}</p>
      <a href="https://aka.ms/spfx" class="${ styles.button }">
        <span class="${ styles.label }">Learn more</span>
          </a>
          </div>
          </div>
          </div>
          </div>`;
  }

  protected get dataVersion(): Version {
  return Version.parse('1.0');
}

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  return {
    pages: [
      {
        header: {
          description: strings.PropertyPaneDescription
        },
        groups: [
          {
            groupName: strings.BasicGroupName,
            groupFields: [
              PropertyPaneTextField('description', {
                label: strings.DescriptionFieldLabel
              })
            ]
          }
        ]
      }
    ]
  };
}
}
