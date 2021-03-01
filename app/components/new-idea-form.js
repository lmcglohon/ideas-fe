import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NewIdeaFormComponent extends Component {
  @service store;

  @action
  async saveIdea(event) {
    event.preventDefault();
    const idea = this.store.createRecord('idea', {
      summary: this.summary,
      quote: this.quote,
    });
    await idea.save();
    this.summary = '';
    this.quote = '';
  }
}
