import { EntityMetadataMap } from '@ngrx/data';
import { Comment } from '../models';

export const companyEntityMetaData: EntityMetadataMap = {
  Comment: {
    selectId: (comment: Comment) => comment.id,
  },
};
