// widgets.js

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";

const initialState = { list: ["영화관 가기", "매일 책읽기", "수영 배우기"] };

// Action Creators
export const loadBucket = (bucket) => {
    return { type: LOAD, bucket };
};

export const createBucket = (bucket) => {
    return { type: CREATE, bucket };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "bucket/LOAD": {
            return state;
        }
        case "bucket/CREATE": {
            const newBucketList = [...state, action.bucket];
            return { list: newBucketList };
        }
        default:
            return state;
    }
}
