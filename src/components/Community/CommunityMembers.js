import React, { useState } from 'react';
import { UserRepository } from 'eko-sdk';

import usePaginatedLiveObject from 'hooks/usePaginatedLiveObject';
import { customizableComponent } from 'hocs/customization';
import Options from 'components/Options';
import { confirm } from 'components/Confirm';
import { notification } from 'components/Notification';
import { LoadMore } from 'components/LoadMore';

import {
  Avatar,
  MemberInfo,
  MemberName,
  Caption,
  CommunityMembersContainer,
  CommunityMembersHeader,
  CommunityMemberContainer,
  CommunityMembersTabs,
} from './styles';

// TODO replace with translations keys
const tabs = {
  MEMBERS: 'Members',
  MODERATORS: 'Moderators',
};

const CommunityMember = ({ user, onMemberClick }) => {
  const confirmRemoving = () =>
    confirm({
      title: 'Remove user from community',
      content:
        'This user won’t no longer be able to search, post and interact in this community. Are you sure you want tocontinue?',
      okText: 'Remove',
      onOk: () => {},
    });

  const onReportClick = () =>
    notification.success({
      content: 'Report Sent',
    });

  return (
    <CommunityMemberContainer>
      <MemberInfo onClick={() => onMemberClick(user)}>
        <Avatar avatar={user.avatar} />
        <div>
          <MemberName>{user.displayName}</MemberName>
          <Caption>@useraccount</Caption>
        </div>
      </MemberInfo>
      <Options
        options={[
          { name: 'Remove from community', action: confirmRemoving },
          { name: 'Report user', action: onReportClick },
        ]}
      />
    </CommunityMemberContainer>
  );
};

const CommunityMembers = ({ onMemberClick }) => {
  const [activeTab, setActiveTab] = useState(tabs.MEMBERS);

  const userRepo = new UserRepository();

  const [users, hasMoreUsers, loadMoreUsers] = usePaginatedLiveObject(
    () => userRepo.getAllUsers(),
    [],
  );

  const moderRepo = new UserRepository();
  const [moderators, hasMoreModerators, loadMoreModerators] = usePaginatedLiveObject(
    () => moderRepo.getAllUsers(),
    [],
  );

  return (
    <CommunityMembersContainer>
      <CommunityMembersHeader>Community Members • {users.length}</CommunityMembersHeader>
      <CommunityMembersTabs
        tabs={[tabs.MEMBERS, tabs.MODERATORS]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
      {activeTab === tabs.MEMBERS && (
        <LoadMore hasMore={hasMoreUsers} loadMore={loadMoreUsers}>
          {users.map(user => (
            <CommunityMember key={user.userId} user={user} onMemberClick={onMemberClick} />
          ))}
        </LoadMore>
      )}
      {activeTab === tabs.MODERATORS && (
        <LoadMore hasMore={hasMoreModerators} loadMore={loadMoreModerators}>
          {moderators.map(user => (
            <CommunityMember key={user.userId} user={user} onMemberClick={onMemberClick} />
          ))}
        </LoadMore>
      )}
    </CommunityMembersContainer>
  );
};

export default customizableComponent('CommunityMembers', CommunityMembers);
