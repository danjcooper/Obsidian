import { seasonData } from '../Interfaces';

// var updateUserName: any;

const updateUserName = (userName: string) => ({
  type: 'UPDATE_USERNAME',
  payload: userName,
});

const updateSeasonData = (seasonData: seasonData[] | null) => ({
  type: 'UPDATE_SEASON_DATA',
  payload: seasonData,
});

export { updateUserName, updateSeasonData };
