import { CommentRepository } from '@amityco/ts-sdk';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Mentionees, Metadata } from '~/helpers/utils';
import { Close, Lock2Icon } from '~/icons';

import {
  ReplyingBlock,
  StoryCommentComposerBarContainer,
  StoryDisabledCommentComposerBarContainer,
} from '~/social/components/StoryViewer/styles';
import CommentComposeBar from '~/social/v4/components/CommentComposeBar';

import {
  ReplyingToText,
  ReplyingToUsername,
} from '~/social/v4/components/CommentComposeBar/styles';

interface StoryCommentComposeBarProps {
  storyId: string;
  comment?: Amity.Comment | null;
  isJoined?: boolean;
  isReplying?: boolean;
  allowCommentInStory?: boolean;
  replyTo?: string | null;
  onCancelReply?: () => void;
  referenceType?: string;
  referenceId?: string;
  commentId?: string;
}

const StoryCommentComposeBar = ({
  storyId,
  isJoined,

  allowCommentInStory,
  isReplying,
  replyTo,
  onCancelReply,
  referenceType,
  referenceId,
  commentId,
}: StoryCommentComposeBarProps) => {
  const { formatMessage } = useIntl();
  const handleAddComment = async (
    commentText: string,
    mentionees: Mentionees,
    metadata: Metadata,
  ) => {
    await CommentRepository.createComment({
      referenceType: 'story',
      referenceId: storyId,
      data: {
        text: commentText,
      },
      mentionees,
      metadata,
    });
  };

  const handleReplyToComment = async (
    replyCommentText: string,
    mentionees: Mentionees,
    metadata: Metadata,
  ) => {
    if (!referenceType || !referenceId) return;
    await CommentRepository.createComment({
      referenceType: referenceType as Amity.CommentReferenceType,
      referenceId,
      data: {
        text: replyCommentText,
      },
      parentId: commentId,
      metadata,
      mentionees,
    });
  };

  if (isJoined && allowCommentInStory) {
    return (
      <>
        {isReplying && (
          <ReplyingBlock>
            <ReplyingToText>
              <FormattedMessage id="storyViewer.commentSheet.replyingTo" />{' '}
              <ReplyingToUsername>{replyTo}</ReplyingToUsername>
            </ReplyingToText>
            <Close width={20} height={20} onClick={onCancelReply} />
          </ReplyingBlock>
        )}
        <StoryCommentComposerBarContainer>
          {!isReplying ? (
            <CommentComposeBar
              storyId={storyId}
              onSubmit={(text, mentionees, metadata) =>
                handleAddComment(text, mentionees, metadata)
              }
            />
          ) : (
            <CommentComposeBar
              storyId={storyId}
              userToReply={replyTo}
              onSubmit={(replyText, mentionees, metadata) => {
                handleReplyToComment(replyText, mentionees, metadata);
                onCancelReply?.();
              }}
            />
          )}
        </StoryCommentComposerBarContainer>
      </>
    );
  }

  if (isJoined && allowCommentInStory) {
    return (
      <StoryDisabledCommentComposerBarContainer>
        <Lock2Icon /> {formatMessage({ id: 'storyViewer.commentSheet.disabled' })}
      </StoryDisabledCommentComposerBarContainer>
    );
  }

  return null;
};

export default StoryCommentComposeBar;
