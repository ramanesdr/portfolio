import { DoneCallback, Job } from 'bull';
import { BullQueueAdvancedProcessor, BullQueueAdvancedSeparateProcessor } from './interfaces/bull.interfaces';
export declare type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
}[Keys];
export declare type BullQueueProcessor = BullQueueProcessorCallback | BullQueueAdvancedProcessor | BullQueueSeparateProcessor | BullQueueAdvancedSeparateProcessor;
export declare type BullQueueProcessorCallback = (job: Job, done?: DoneCallback) => void;
export declare type BullQueueSeparateProcessor = string;
export declare type BullQueueEvent = 'error' | 'waiting' | 'active' | 'stalled' | 'progress' | 'completed' | 'failed' | 'paused' | 'resumed' | 'cleaned' | 'drained' | 'removed' | 'global:error' | 'global:waiting' | 'global:active' | 'global:stalled' | 'global:progress' | 'global:completed' | 'global:failed' | 'global:paused' | 'global:resumed' | 'global:cleaned' | 'global:drained' | 'global:removed';
export declare type BullQueueEventOptions = RequireOnlyOne<{
    eventName: BullQueueEvent;
    name?: string;
    id?: string;
}, 'id' | 'name'>;
export declare type QueueEventDecoratorOptions = RequireOnlyOne<{
    id?: string;
    name?: string;
}, 'id' | 'name'>;
//# sourceMappingURL=bull.types.d.ts.map