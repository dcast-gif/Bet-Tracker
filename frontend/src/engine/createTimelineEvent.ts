export type TimelineEvent = {
  id: string;
  time: string;
  title: string;
  description: string;
};

export function createTimelineEvent(
  minute: number,
  title: string,
  description: string
): TimelineEvent {
  return {
    id: crypto.randomUUID(),
    time: `${minute}'`,
    title,
    description,
  };
}