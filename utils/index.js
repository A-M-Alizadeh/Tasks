import appToast from './appToast';
import colors from './colors';
import dims from './dims';
import storage from './storage';
import storge from './storage';

const createRequestBody = async (object, isProtected = true) => {
  var formData = new FormData();
  if (object)
    for (var o in object) {
      formData.append(o, object[o]);
    }
  const token = await storage.getItem(`access_token`, false);
  isProtected ? formData.append('access_token', token) : null;
  return formData;
};

export {appToast, colors, dims, createRequestBody, storge};
