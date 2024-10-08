import axios from 'axios';

export const getCourse = async (courseCode, timetableType, session) => {
  try {
    const response = await axios.get('https://api.brocktimetable.com/api/getCourse', {
      params: {
        courseCode,
        timetableType,
        session,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching course:', error);
    throw error;
  }
};

export const getNameList = async (timetableType, session) => {
  try {
    const response = await axios.get('https://api.brocktimetable.com/api/getNameList', {
      params: {
        timetableType,
        session,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching name list:', error);
    throw error;
  }
};