import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { useQueryClient } from '@tanstack/react-query';
import apiRequest from '../../utils/apiRequest';
const followUser=async (username)=>{
    const res = await apiRequest.post(`/users/follow/${username}`)
    return res.data
}

function FollowButton({isFollowing,username}) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: followUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey:["profile", username] });
      setDesc("");
      setOpen(false);
    },
  });
  
  
  
    return (
    <button onClick={() => mutation.mutate(username)}
      disabled={mutation.isPending}>
    {isFollowing? "Unfollow": "Follow"}
    </button>
  )
}

export default FollowButton