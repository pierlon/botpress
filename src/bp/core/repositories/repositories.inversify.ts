import { ContainerModule, interfaces } from 'inversify'

import { TYPES } from '../types'

import {
  BotRepository,
  GhostBotRepository,
  KnexNotificationsRepository,
  KnexSessionRepository,
  KnexUserRepository,
  NotificationsRepository,
  SessionRepository,
  UserRepository
} from '.'
import { ConversationsRepository } from './conversations'
import { KnexLogsRepository, LogsRepository } from './logs'

const RepositoriesContainerModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<BotRepository>(TYPES.BotRepository)
    .to(GhostBotRepository)
    .inSingletonScope()

  bind<SessionRepository>(TYPES.SessionRepository)
    .to(KnexSessionRepository)
    .inSingletonScope()

  bind<UserRepository>(TYPES.UserRepository)
    .to(KnexUserRepository)
    .inSingletonScope()

  bind<LogsRepository>(TYPES.LogsRepository)
    .to(KnexLogsRepository)
    .inSingletonScope()

  bind<NotificationsRepository>(TYPES.NotificationsRepository)
    .to(KnexNotificationsRepository)
    .inSingletonScope()

  bind<ConversationsRepository>(TYPES.ConversationsRepository)
    .to(ConversationsRepository)
    .inSingletonScope()
})

export const RepositoriesContainerModules = [RepositoriesContainerModule]
