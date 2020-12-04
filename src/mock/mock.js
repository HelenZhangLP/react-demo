import { agents } from './data/agentList';
import fetchMock from 'fetch-mock';

export default {
  start() {
    fetchMock.get('user/list', () => {
      return agents
    })
  }
}
