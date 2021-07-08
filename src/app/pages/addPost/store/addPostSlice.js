import { PAGEITEMSIZE } from '../../../utils/Contants';
import { createSlice } from '@reduxjs/toolkit';
import { LoadDataFromStorage, SaveDataToStorage } from '../../../utils/LocalStorage';
import { v4 as uuidv4 } from 'uuid';

export const addPostSlice = createSlice({
    name: 'links',
    initialState: {
        links: LoadDataFromStorage(),
        sortProperty: 'sortedByDate',
        reverseSort: false,
        hoveredLinkId: -1
    },
    reducers: {
        UpVote: (state, action) => {
            let link = state.links.find((link) => link.id === action.payload);
            link.vote = link.vote + 1;
            link.lastVoteDate = Date.now();
            SaveDataToStorage(state.links);
        },
        DownVote: (state, action) => {
            let link = state.links.find((link) => link.id === action.payload);
            link.vote = link.vote - 1;
            link.lastVoteDate = Date.now();
            SaveDataToStorage(state.links);
        },
        SetSortOptions: (state, action) => {
            state.sortProperty = action.payload.sortProperty;
            state.reverseSort = action.payload.reverseSort;
        },
        SetHoveredLinkId: (state, action) => { state.hoveredLinkId = action.payload },
        RemoveLink: (state, action) => {
            state.links = state.links.filter(link => link.id !== action.payload)
            SaveDataToStorage(state.links);
        },
        AddLink: (state, action) => {
            state.links.push({
                id: uuidv4(),
                linkDesc: action.payload.linkDesc,
                urlLink: action.payload.urlLink,
                vote: 0,
                createDate: Date.now(),
                lastVoteDate: Date.now()
            })
            SaveDataToStorage(state.links)
        }

    },
});

export const { UpVote, DownVote, SetSortOptions, SetHoveredLinkId, RemoveLink, AddLink } = addPostSlice.actions;


export const selectPageCount = state => Math.ceil(state.links.links.length / PAGEITEMSIZE)
export const selectLinks = state => state.links.links;
export const selectLinkInfos = state => {
    return state.links.links.map((link) => (({ id, linkDesc, urlLink, vote }) => ({ id, linkDesc, urlLink, vote }))(link));
}
export const selectSortOptions = state => ({
    sortProperty: state.links.sortProperty,
    reverseSort: state.links.reverseSort
});
export const selectHoveredLinkId = (state) => state.links.hoveredLinkId;

export default addPostSlice.reducer;
