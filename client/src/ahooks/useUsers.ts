import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'


import { QueryUserParams, usersApi } from '@/actions/userAction'

import { useUserStore } from '@/store'


export const useGetUsers = ({
  enabled = true,
  params,
}: {
  enabled?: boolean
  params?: QueryUserParams
}) =>
  useQuery({
    queryKey: ['users'],
    queryFn: () => usersApi.getUsers(params ?? {}),
    enabled
  })

export const useGetUserById = (id: string) =>
  useQuery({
    queryKey: ['users', id],
    queryFn: () => usersApi.getUserById(id),
  })

export const useUpdateModerator = () => {
  const { user } = useUserStore()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['update-moderator'],
    mutationFn: usersApi.updateModerator,
    onSuccess: (data) => {
      if (data.id === user!.id) {
        queryClient.invalidateQueries({
          queryKey: ['user', 'refresh'],
        })
      }

      queryClient.invalidateQueries({
        queryKey: ['users'],
      })
    },
  })
}

export const useDeleteModerator = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['delete-moderator'],
    mutationFn: usersApi.deleteModerator,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      })
    },
  })
}
