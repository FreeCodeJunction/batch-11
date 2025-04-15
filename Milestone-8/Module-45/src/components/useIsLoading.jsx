import { useNavigation } from "react-router";

export default function useIsLoading() {
  const navigation = useNavigation();

  return {
    isIdle: navigation.state === "idle",
    isLoading: navigation.state === "loading",
    isSubmitting: navigation.state === "submitting",
    isBusy: navigation.state !== "idle", // true for both loading & submitting
    navigationState: navigation.state,
  };
}
