import Application from 'ideas-fe/app';
import config from 'ideas-fe/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
