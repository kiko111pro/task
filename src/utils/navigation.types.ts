import {Root} from './movies.types';

type Routes = {
  routeNames: never[];
};

export type navigationProps = {
  navigate: (screen?: string, params?: object) => void;
  goBack: () => void;
  reset: (index: number, routeNames: Routes[]) => void;
};
