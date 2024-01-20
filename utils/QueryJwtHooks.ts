// import { useQueryClient, useQuery } from 'react-query';

// const jwtQueryKey = 'jwtToken';
// const sessionKey = 'sessionKey';

// export const useSetJwtToken = () => {
//   const queryClient = useQueryClient();

//   return (token: string) => {
//     queryClient.setQueryData<string>(jwtQueryKey, token);
//   };
// };

// export const useGetJwtToken = () => {
//   const queryClient = useQueryClient();

//   return () => {
//     return queryClient.getQueryData<string>(jwtQueryKey);
//   };
// };


// export const useSetIsAuthenticatedOn = () => {
//   const queryClient = useQueryClient();

//   return () => {
//     queryClient.setQueryData<boolean>(sessionKey, true);
//   };
// };

// export const useSetIsAuthenticatedOf = () => {
//   const queryClient = useQueryClient();

//   return () => {
//     queryClient.setQueryData<false>(sessionKey, false);
//   };
// };

// export const useGetIsAuthenticated = () => {
//   const queryClient = useQueryClient();

//   return () => {
//     return queryClient.getQueryData<boolean>(sessionKey);
//   };
// };