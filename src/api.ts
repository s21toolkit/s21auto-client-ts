import { Client } from "@/Client"
import { createGqlQueryRequest } from "@/gql"

type ElideVariables<TVariables> = {} extends TVariables
	? [variables?: TVariables]
	: [variables: TVariables]

function useDefaultVariables<T>(variables: T | undefined): Partial<T> {
	return variables ?? {}
}

export namespace Api {
	export namespace GetUserRestrictionsInfo {
		export const request = createGqlQueryRequest(
			"query getUserRestrictionsInfo {\n  school21 {\n    getUserRestrictions {\n      restrictionId\n      restrictionType\n      userId\n      schoolId\n      isActive\n      createdTs\n      updatedTs\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				school21: School21
			}

			export type School21 = {
				getUserRestrictions: unknown[]
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace UserRoleLoaderGetRoles {
		export const request = createGqlQueryRequest(
			"query userRoleLoaderGetRoles {\n  user {\n    getCurrentUser {\n      functionalRoles {\n        code\n        __typename\n      }\n      id\n      studentRoles {\n        id\n        school {\n          id\n          shortName\n          organizationType\n          __typename\n        }\n        status\n        __typename\n      }\n      userSchoolPermissions {\n        schoolId\n        permissions\n        __typename\n      }\n      systemAdminRole {\n        id\n        __typename\n      }\n      businessAdminRolesV2 {\n        id\n        school {\n          id\n          organizationType\n          __typename\n        }\n        orgUnitId\n        __typename\n      }\n      __typename\n    }\n    getCurrentUserSchoolRoles {\n      schoolId\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				user: User
			}

			export type User = {
				getCurrentUser: GetCurrentUser
				getCurrentUserSchoolRoles: GetCurrentUserSchoolRole[]
				__typename: string
			}

			export type GetCurrentUser = {
				functionalRoles: FunctionalRole[]
				id: string
				studentRoles: StudentRole[]
				userSchoolPermissions: UserSchoolPermission[]
				systemAdminRole: null
				businessAdminRolesV2: unknown[]
				__typename: string
			}

			export type FunctionalRole = {
				code: string
				__typename: string
			}

			export type StudentRole = {
				id: string
				school: School
				status: string
				__typename: string
			}

			export type School = {
				id: string
				shortName: string
				organizationType: string
				__typename: string
			}

			export type UserSchoolPermission = {
				schoolId: string
				permissions: string[]
				__typename: string
			}

			export type GetCurrentUserSchoolRole = {
				schoolId: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetUserFeatureFlags {
		export const request = createGqlQueryRequest(
			"query getUserFeatureFlags($entityId: String!) {\n  user {\n    getAllBackendConfigurations: getAllBackendConfigurationsV2(entityId: $entityId) {\n      propertyCode\n      value\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				entityId?: string
				entityIdList?: string[]
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				user: User
			}

			export type User = {
				getAllBackendConfigurations: GetAllBackendConfiguration[]
				__typename: string
			}

			export type GetAllBackendConfiguration = {
				propertyCode: string
				value: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetStudentIsDeadlinesEnabled {
		export const request = createGqlQueryRequest(
			"query getStudentIsDeadlinesEnabled {\n  student {\n    isDeadlinesEnabled\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				isDeadlinesEnabled: boolean
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetTournamentNotificationResults {
		export const request = createGqlQueryRequest(
			"query getTournamentNotificationResults {\n  student {\n    getTournamentResults(isShown: false) {\n      id\n      power\n      coalitionRank\n      userRank\n      firstCoalitionName\n      coalitionName\n      timeClosed\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getTournamentResults: unknown[]
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace DeadlinesGetStudentData {
		export const request = createGqlQueryRequest(
			"query deadlinesGetStudentData {\n  student {\n    getStudentProfile {\n      user {\n        id\n        login\n        firstName\n        middleName\n        lastName\n        __typename\n      }\n      __typename\n    }\n    getExperience {\n      id\n      value\n      level {\n        id\n        range {\n          id\n          levelCode\n          rightBorder\n          leftBorder\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    getExperienceHistory {\n      id\n      awardDate\n      experienceReceived\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getStudentProfile: GetStudentProfile
				getExperience: GetExperience
				getExperienceHistory: GetExperienceHistory[]
				__typename: string
			}

			export type GetExperience = {
				id: string
				value: number
				level: Level
				__typename: string
			}

			export type Level = {
				id: number
				range: Range
				__typename: string
			}

			export type Range = {
				id: string
				levelCode: number
				rightBorder: number
				leftBorder: number
				__typename: string
			}

			export type GetExperienceHistory = {
				id: string
				awardDate: Date
				experienceReceived: number
				__typename: string
			}

			export type GetStudentProfile = {
				user: User
				__typename: string
			}

			export type User = {
				id: string
				login: string
				firstName: string
				middleName: string
				lastName: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace DeadlineReminderGetClosestDeadlinePopup {
		export const request = createGqlQueryRequest(
			"query deadlineReminderGetClosestDeadlinePopup {\n  student {\n    getClosestDeadlinePopup {\n      deadline {\n        ...DeadlineData\n        __typename\n      }\n      deadlineGoal {\n        ...DeadlineGoalData\n        __typename\n      }\n      shiftCount\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment DeadlineData on Deadline {\n  deadlineId\n  description\n  comment\n  deadlineToDaysArray\n  deadlineTs\n  createTs\n  updateTs\n  status\n  rules {\n    logicalOperatorId\n    rulesInGroup {\n      logicalOperatorId\n      value {\n        fieldId\n        subFieldKey\n        operator\n        value\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment DeadlineGoalData on DeadlineGoal {\n  goalProjects {\n    studentGoalId\n    project {\n      goalName\n      goalId\n      __typename\n    }\n    status\n    executionType\n    finalPercentage\n    finalPoint\n    pointTask\n    __typename\n  }\n  goalCourses {\n    ...GoalCourse\n    __typename\n  }\n  levels {\n    ...Level\n    __typename\n  }\n  __typename\n}\n\nfragment GoalCourse on CourseCoverInformation {\n  localCourseId\n  courseName\n  courseType\n  experienceFact\n  finalPercentage\n  displayedCourseStatus\n  __typename\n}\n\nfragment Level on ExperienceLevelRange {\n  id\n  level\n  levelCode\n  leftBorder\n  rightBorder\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getClosestDeadlinePopup: null
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace EventsWithoutFeedback {
		export const request = createGqlQueryRequest(
			"query eventsWithoutFeedback($from: DateTime!, $to: DateTime!) {\n  student {\n    getCalendarEventsWithoutFeedback(from: $from, to: $to) {\n      id\n      activity {\n        eventId\n        name\n        endDate\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				from: Date
				to: Date
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getCalendarEventsWithoutFeedback: unknown[]
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetIsHonorRatingNeeded {
		export const request = createGqlQueryRequest(
			"query getIsHonorRatingNeeded {\n  student {\n    isHonorRatingNeeded\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				isHonorRatingNeeded: boolean
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetSaleProgressPercentages {
		export const request = createGqlQueryRequest(
			"query getSaleProgressPercentages {\n  school21 {\n    getSaleProgressPercentages {\n      ...RpSaleInfo\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment RpSaleInfo on RpSaleProgress {\n  rpType\n  progressPercentage\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				school21: School21
			}

			export type School21 = {
				getSaleProgressPercentages: GetSaleProgressPercentage[]
				__typename: string
			}

			export type GetSaleProgressPercentage = {
				rpType: string
				progressPercentage: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetSearchHistory {
		export const request = createGqlQueryRequest(
			"query getSearchHistory {\n  school21 {\n    getSearchHistoryTooltips {\n      tooltipText\n      tooltipCategory\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				school21: School21
			}

			export type School21 = {
				getSearchHistoryTooltips: GetSearchHistoryTooltip[]
				__typename: string
			}

			export type GetSearchHistoryTooltip = {
				tooltipText: string
				tooltipCategory: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetUserNotificationsCount {
		export const request = createGqlQueryRequest(
			"query getUserNotificationsCount($wasReadIncluded: Boolean) {\n  student {\n    getS21NotificationsCount(wasReadIncluded: $wasReadIncluded)\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				wasReadIncluded: boolean
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getS21NotificationsCount: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace DashboardHeaderGetInfo {
		export const request = createGqlQueryRequest(
			"query dashboardHeaderGetInfo {\n  user {\n    getCurrentUser {\n      id\n      login\n      avatarUrl\n      firstName\n      middleName\n      lastName\n      currentSchoolStudentId\n      studentRoles {\n        id\n        status\n        school {\n          id\n          shortName\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  student {\n    getUserTournamentWidget {\n      coalitionMember {\n        coalition {\n          avatarUrl\n          color\n          name\n          memberCount\n          __typename\n        }\n        currentTournamentPowerRank {\n          rank\n          __typename\n        }\n        __typename\n      }\n      lastTournamentResult {\n        userRank\n        __typename\n      }\n      __typename\n    }\n    getExperience {\n      id\n      value\n      level {\n        id\n        range {\n          id\n          levelCode\n          rightBorder\n          leftBorder\n          __typename\n        }\n        __typename\n      }\n      cookiesCount\n      coinsCount\n      codeReviewPoints\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				user: User
				student: Student
			}

			export type Student = {
				getUserTournamentWidget: GetUserTournamentWidget
				getExperience: GetExperience
				__typename: string
			}

			export type GetExperience = {
				id: string
				value: number
				level: Level
				cookiesCount: number
				coinsCount: number
				codeReviewPoints: number
				__typename: string
			}

			export type Level = {
				id: number
				range: Range
				__typename: string
			}

			export type Range = {
				id: string
				levelCode: number
				rightBorder: number
				leftBorder: number
				__typename: string
			}

			export type GetUserTournamentWidget = {
				coalitionMember: CoalitionMember
				lastTournamentResult: LastTournamentResult
				__typename: string
			}

			export type CoalitionMember = {
				coalition: Coalition
				currentTournamentPowerRank: CurrentTournamentPowerRank
				__typename: string
			}

			export type Coalition = {
				avatarUrl: string
				color: string
				name: string
				memberCount: number
				__typename: string
			}

			export type CurrentTournamentPowerRank = {
				rank: number
				__typename: string
			}

			export type LastTournamentResult = {
				userRank: number
				__typename: string
			}

			export type User = {
				getCurrentUser: GetCurrentUser
				__typename: string
			}

			export type GetCurrentUser = {
				id: string
				login: string
				avatarUrl: string
				firstName: string
				middleName: string
				lastName: string
				currentSchoolStudentId: string
				studentRoles: StudentRole[]
				__typename: string
			}

			export type StudentRole = {
				id: string
				status: string
				school: School
				__typename: string
			}

			export type School = {
				id: string
				shortName: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace DeadlinesGetDeadlines {
		export const request = createGqlQueryRequest(
			"query deadlinesGetDeadlines($deadlineStatuses: [DeadlineStatus!]!, $page: PagingInput!, $deadlinesFrom: DateTime, $deadlinesTo: DateTime, $sorting: [SortingField]) {\n  student {\n    getDeadlines(\n      deadlineStatuses: $deadlineStatuses\n      page: $page\n      deadlineFrom: $deadlinesFrom\n      deadlineTo: $deadlinesTo\n      sorting: $sorting\n    ) {\n      deadline {\n        ...DeadlineData\n        __typename\n      }\n      shiftRequests {\n        deadlineShiftRequestId\n        status\n        daysToShift\n        createTs\n        __typename\n      }\n      deadlineGoal {\n        ...DeadlineGoalData\n        __typename\n      }\n      shiftCount\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment DeadlineData on Deadline {\n  deadlineId\n  description\n  comment\n  deadlineToDaysArray\n  deadlineTs\n  createTs\n  updateTs\n  status\n  rules {\n    logicalOperatorId\n    rulesInGroup {\n      logicalOperatorId\n      value {\n        fieldId\n        subFieldKey\n        operator\n        value\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment DeadlineGoalData on DeadlineGoal {\n  goalProjects {\n    studentGoalId\n    project {\n      goalName\n      goalId\n      __typename\n    }\n    status\n    executionType\n    finalPercentage\n    finalPoint\n    pointTask\n    __typename\n  }\n  goalCourses {\n    ...GoalCourse\n    __typename\n  }\n  levels {\n    ...Level\n    __typename\n  }\n  __typename\n}\n\nfragment GoalCourse on CourseCoverInformation {\n  localCourseId\n  courseName\n  courseType\n  experienceFact\n  finalPercentage\n  displayedCourseStatus\n  __typename\n}\n\nfragment Level on ExperienceLevelRange {\n  id\n  level\n  levelCode\n  leftBorder\n  rightBorder\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				page: Page
				deadlineStatuses: string[]
				sorting: Sorting
			}

			export type Page = {
				limit: number
				offset: number
			}

			export type Sorting = {
				name: string
				asc: boolean
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getDeadlines: GetDeadline[]
				__typename: string
			}

			export type GetDeadline = {
				deadline: Deadline
				shiftRequests: unknown[]
				deadlineGoal: DeadlineGoal
				shiftCount: number
				__typename: string
			}

			export type Deadline = {
				deadlineId: string
				description: string
				comment: string
				deadlineToDaysArray: number[]
				deadlineTs: Date
				createTs: Date
				updateTs: Date | null
				status: string
				rules: Rule[]
				__typename: string
			}

			export type Rule = {
				logicalOperatorId: null
				rulesInGroup: RulesInGroup[]
				__typename: string
			}

			export type RulesInGroup = {
				logicalOperatorId: null
				value: Value
				__typename: string
			}

			export type Value = {
				fieldId: string
				subFieldKey: null
				operator: string
				value: string[]
				__typename: string
			}

			export type DeadlineGoal = {
				goalProjects: unknown[]
				goalCourses: unknown[]
				levels: Level[]
				__typename: string
			}

			export type Level = {
				id: string
				level: number
				levelCode: number
				leftBorder: number
				rightBorder: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetDashboardBuildings {
		export const request = createGqlQueryRequest(
			"query getDashboardBuildings {\n  student {\n    getBuildings {\n      id\n      classrooms {\n        id\n        number\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getBuildings: GetBuilding[]
				__typename: string
			}

			export type GetBuilding = {
				id: string
				classrooms: Classroom[]
				__typename: string
			}

			export type Classroom = {
				id: string
				number: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetUpcomingEvents {
		export const request = createGqlQueryRequest(
			"query getUpcomingEvents($eventCodes: [String!]!, $registrationAccessStatusFilter: RegistartionStatusEnum, $page: PagingInput) {\n  student {\n    getUpcomingEventsForRegistration(\n      eventCodes: $eventCodes\n      registrationAccessStatusFilter: $registrationAccessStatusFilter\n      page: $page\n    ) {\n      ...UpcomingEvent\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment UpcomingEvent on CalendarEvent {\n  id\n  start\n  end\n  bookings {\n    id\n    task {\n      id\n      goalName\n      __typename\n    }\n    __typename\n  }\n  eventSlots {\n    id\n    eventId\n    type\n    start\n    end\n    __typename\n  }\n  maxStudentCount\n  location\n  ipRange\n  eventType\n  eventCode\n  description\n  externalId\n  currentStudentsCount\n  exam {\n    examId\n    eventId\n    beginDate\n    endDate\n    location\n    ip\n    maxStudentCount\n    isVisible\n    name\n    goalId\n    isWaitListActive\n    isInWaitList\n    currentStudentsCount\n    createDate\n    updateDate\n    schoolId\n    stopRegisterDate\n    isRegistered\n    goalName\n    eventType\n    registrationAccessStatus\n    __typename\n  }\n  studentCodeReview {\n    studentGoalId\n    __typename\n  }\n  activity {\n    activityEventId\n    eventId\n    beginDate\n    endDate\n    location\n    description\n    maxStudentCount\n    isVisible\n    name\n    isWaitListActive\n    isInWaitList\n    currentStudentsCount\n    createDate\n    updateDate\n    schoolId\n    stopRegisterDate\n    isRegistered\n    activityType\n    eventType\n    isMandatory\n    status\n    organizers {\n      id\n      login\n      __typename\n    }\n    __typename\n  }\n  penalty {\n    ...Penalty\n    __typename\n  }\n  __typename\n}\n\nfragment Penalty on Penalty {\n  comment\n  id\n  duration\n  status\n  startTime\n  createTime\n  penaltySlot {\n    currentStudentsCount\n    description\n    duration\n    startTime\n    id\n    endTime\n    __typename\n  }\n  reasonId\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				eventCodes: string[]
				registrationAccessStatusFilter?: string
				page?: Page
			}

			export type Page = {
				limit: number
				offset: number
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getUpcomingEventsForRegistration: GetUpcomingEventsForRegistration[]
				__typename: string
			}

			export type GetUpcomingEventsForRegistration = {
				id: string
				start: Date
				end: Date
				bookings: unknown[]
				eventSlots: unknown[]
				maxStudentCount: number
				location: string
				ipRange: null | string
				eventType: string
				eventCode: string
				description: string
				externalId: number
				currentStudentsCount: number
				exam: Exam | null
				studentCodeReview: null
				activity: Activity | null
				penalty: null
				__typename: string
			}

			export type Activity = {
				activityEventId: string
				eventId: string
				beginDate: Date
				endDate: Date
				location: string
				description: string
				maxStudentCount: number
				isVisible: boolean
				name: string
				isWaitListActive: boolean
				isInWaitList: boolean
				currentStudentsCount: number
				createDate: Date
				updateDate: Date
				schoolId: string
				stopRegisterDate: Date
				isRegistered: boolean
				activityType: string
				eventType: string
				isMandatory: boolean
				status: null | string
				organizers: Organizer[]
				__typename: string
			}

			export type Organizer = {
				id: string
				login: string
				__typename: string
			}

			export type Exam = {
				examId: string
				eventId: string
				beginDate: Date
				endDate: Date
				location: string
				ip: null
				maxStudentCount: number
				isVisible: boolean
				name: string
				goalId: string
				isWaitListActive: boolean
				isInWaitList: boolean
				currentStudentsCount: number
				createDate: Date
				updateDate: Date
				schoolId: string
				stopRegisterDate: Date
				isRegistered: boolean
				goalName: string
				eventType: string
				registrationAccessStatus: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetAgendaEvents {
		export const request = createGqlQueryRequest(
			"query getAgendaEvents($from: DateTime!, $to: DateTime!, $limit: Int!) {\n  student {\n    getMyAgendaEvents(from: $from, to: $to, limit: $limit) {\n      agendaItemContext {\n        entityId\n        entityType\n        __typename\n      }\n      start\n      end\n      label\n      description\n      agendaEventType\n      additionalInfo {\n        key\n        value\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				from: Date
				to: Date
				limit: number
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getMyAgendaEvents: GetMyAgendaEvent[]
				__typename: string
			}

			export type GetMyAgendaEvent = {
				agendaItemContext: AgendaItemContext
				start: Date
				end: Date
				label: string
				description: string
				agendaEventType: string
				additionalInfo: AdditionalInfo[]
				__typename: string
			}

			export type AdditionalInfo = {
				key: string
				value: string
				__typename: string
			}

			export type AgendaItemContext = {
				entityId: string
				entityType: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace WidgetAchievementsGetLastBadges {
		export const request = createGqlQueryRequest(
			"query widgetAchievementsGetLastBadges($limit: Int) {\n  student {\n    getLastBadges(limit: $limit) {\n      id\n      points\n      badge {\n        name\n        avatarUrl\n        __typename\n      }\n      award {\n        awardBounties {\n          awardLevelId\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				limit: number
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getLastBadges: GetLastBadge[]
				__typename: string
			}

			export type GetLastBadge = {
				id: string
				points: number
				badge: Badge
				award: Award
				__typename: string
			}

			export type Award = {
				awardBounties: AwardBounty[]
				__typename: string
			}

			export type AwardBounty = {
				awardLevelId: number | null
				__typename: string
			}

			export type Badge = {
				name: string
				avatarUrl: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetDashboardWorkstation {
		export const request = createGqlQueryRequest(
			"query getDashboardWorkstation($login: String!) {\n  student {\n    getWorkstationByLogin(login: $login) {\n      id\n      classroomId\n      hostName\n      classroom {\n        floor\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				login: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getWorkstationByLogin: null
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetStudentStageGroupS21 {
		export const request = createGqlQueryRequest(
			"query getStudentStageGroupS21($studentId: UUID!) {\n  student {\n    getStageGroupS21PublicProfile(studentId: $studentId) {\n      waveId\n      waveName\n      eduForm\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				studentId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getStageGroupS21PublicProfile: GetStageGroupS21PublicProfile
				__typename: string
			}

			export type GetStageGroupS21PublicProfile = {
				waveId: number
				waveName: string
				eduForm: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetAsapWidgets {
		export const request = createGqlQueryRequest(
			"query getAsapWidgets {\n  student {\n    getAsapWidgetList {\n      widgetList {\n        ...AsapWidget\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AsapWidget on AsapWidgetInfo {\n  shortImg\n  shortTitle\n  shortUrl\n  startDate\n  finishDate\n  showFinishDate\n  fullTitle\n  text\n  fullImgUrl\n  adtTypeId\n  adtWidgetId\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getAsapWidgetList: GetAsapWidgetList
				__typename: string
			}

			export type GetAsapWidgetList = {
				widgetList: WidgetList[]
				__typename: string
			}

			export type WidgetList = {
				shortImg: string
				shortTitle: string
				shortUrl: null
				startDate: Date
				finishDate: Date
				showFinishDate: boolean
				fullTitle: string
				text: string
				fullImgUrl: string
				adtTypeId: number
				adtWidgetId: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetCurrentUser {
		export const request = createGqlQueryRequest(
			"query getCurrentUser {\n  user {\n    getCurrentUser {\n      ...CurrentUser\n      __typename\n    }\n    __typename\n  }\n  student {\n    getExperience {\n      ...CurrentUserExperience\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CurrentUser on User {\n  id\n  avatarUrl\n  login\n  firstName\n  middleName\n  lastName\n  currentSchoolStudentId\n  __typename\n}\n\nfragment CurrentUserExperience on UserExperience {\n  id\n  cookiesCount\n  codeReviewPoints\n  coinsCount\n  level {\n    id\n    range {\n      id\n      levelCode\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				user: User
				student: Student
			}

			export type Student = {
				getExperience: GetExperience
				__typename: string
			}

			export type GetExperience = {
				id: string
				cookiesCount: number
				codeReviewPoints: number
				coinsCount: number
				level: Level
				__typename: string
			}

			export type Level = {
				id: number
				range: Range
				__typename: string
			}

			export type Range = {
				id: string
				levelCode: number
				__typename: string
			}

			export type User = {
				getCurrentUser: GetCurrentUser
				__typename: string
			}

			export type GetCurrentUser = {
				id: string
				avatarUrl: string
				login: string
				firstName: string
				middleName: string
				lastName: string
				currentSchoolStudentId: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace CalendarGetEvents {
		export const request = createGqlQueryRequest(
			"query calendarGetEvents($from: DateTime!, $to: DateTime!) {\n  student {\n    getMyCalendarEvents(from: $from, to: $to) {\n      ...CalendarEvent\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CalendarEvent on CalendarEvent {\n  id\n  start\n  end\n  description\n  eventType\n  eventCode\n  eventSlots {\n    id\n    type\n    start\n    end\n    __typename\n  }\n  bookings {\n    ...CalendarReviewBooking\n    __typename\n  }\n  exam {\n    ...CalendarEventExam\n    __typename\n  }\n  studentCodeReview {\n    studentGoalId\n    __typename\n  }\n  activity {\n    ...CalendarEventActivity\n    studentFeedback {\n      id\n      rating\n      comment\n      __typename\n    }\n    status\n    activityType\n    isMandatory\n    isWaitListActive\n    isVisible\n    comments {\n      type\n      createTs\n      comment\n      __typename\n    }\n    organizers {\n      id\n      login\n      __typename\n    }\n    __typename\n  }\n  goals {\n    goalId\n    goalName\n    __typename\n  }\n  penalty {\n    ...Penalty\n    __typename\n  }\n  __typename\n}\n\nfragment CalendarReviewBooking on CalendarBooking {\n  id\n  answerId\n  eventSlotId\n  task {\n    id\n    goalId\n    goalName\n    studentTaskAdditionalAttributes {\n      cookiesCount\n      __typename\n    }\n    assignmentType\n    __typename\n  }\n  eventSlot {\n    id\n    start\n    end\n    event {\n      eventUserRole\n      __typename\n    }\n    __typename\n  }\n  verifierUser {\n    ...CalendarReviewUser\n    __typename\n  }\n  verifiableStudent {\n    id\n    user {\n      ...CalendarReviewUser\n      __typename\n    }\n    __typename\n  }\n  bookingStatus\n  team {\n    ...ProjectTeamMembers\n    __typename\n  }\n  isOnline\n  vcLinkUrl\n  __typename\n}\n\nfragment CalendarReviewUser on User {\n  id\n  login\n  __typename\n}\n\nfragment ProjectTeamMembers on ProjectTeamMembers {\n  id\n  teamLead {\n    ...ProjectTeamMember\n    __typename\n  }\n  members {\n    ...ProjectTeamMember\n    __typename\n  }\n  invitedUsers {\n    ...ProjectTeamMember\n    __typename\n  }\n  teamName\n  teamStatus\n  minTeamMemberCount\n  maxTeamMemberCount\n  __typename\n}\n\nfragment ProjectTeamMember on User {\n  id\n  avatarUrl\n  login\n  userExperience {\n    level {\n      id\n      range {\n        levelCode\n        __typename\n      }\n      __typename\n    }\n    cookiesCount\n    codeReviewPoints\n    __typename\n  }\n  __typename\n}\n\nfragment CalendarEventExam on Exam {\n  examId\n  eventId\n  beginDate\n  endDate\n  name\n  location\n  currentStudentsCount\n  maxStudentCount\n  updateDate\n  goalId\n  goalName\n  isWaitListActive\n  isInWaitList\n  stopRegisterDate\n  __typename\n}\n\nfragment CalendarEventActivity on ActivityEvent {\n  activityEventId\n  eventId\n  name\n  beginDate\n  endDate\n  isRegistered\n  description\n  currentStudentsCount\n  maxStudentCount\n  location\n  updateDate\n  isWaitListActive\n  isInWaitList\n  stopRegisterDate\n  __typename\n}\n\nfragment Penalty on Penalty {\n  comment\n  id\n  duration\n  status\n  startTime\n  createTime\n  penaltySlot {\n    currentStudentsCount\n    description\n    duration\n    startTime\n    id\n    endTime\n    __typename\n  }\n  reasonId\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				from: Date
				to: Date
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getMyCalendarEvents: GetMyCalendarEvent[]
				__typename: string
			}

			export type GetMyCalendarEvent = {
				id: string
				start: Date
				end: Date
				description: string
				eventType: string
				eventCode: string
				eventSlots: EventSlot[]
				bookings: Booking[]
				exam: null
				studentCodeReview: null
				activity: Activity | null
				goals: unknown[]
				penalty: null
				__typename: string
			}

			export type Activity = {
				activityEventId: string
				eventId: string
				name: string
				beginDate: Date
				endDate: Date
				isRegistered: boolean
				description: string
				currentStudentsCount: number
				maxStudentCount: number
				location: string
				updateDate: Date
				isWaitListActive: boolean
				isInWaitList: boolean
				stopRegisterDate: Date
				__typename: string
				studentFeedback: StudentFeedback
				status: string
				activityType: string
				isMandatory: boolean
				isVisible: boolean
				comments: unknown[]
				organizers: VerifierUser[]
			}

			export type VerifierUser = {
				id: string
				login: string
				__typename: string
			}

			export type StudentFeedback = {
				id: string
				rating: number
				comment: string
				__typename: string
			}

			export type Booking = {
				id: string
				answerId: null | string
				eventSlotId: string
				task: Task | null
				eventSlot: EventSlot
				verifierUser: VerifierUser
				verifiableStudent: VerifiableStudent | null
				bookingStatus: string
				team: Team | null
				isOnline: boolean
				vcLinkUrl: null
				__typename: string
			}

			export type EventSlot = {
				id: string
				start: Date
				end: Date
				event?: Event
				__typename: string
				type?: string
			}

			export type Event = {
				eventUserRole: string
				__typename: string
			}

			export type Task = {
				id: string
				goalId: string
				goalName: string
				studentTaskAdditionalAttributes: StudentTaskAdditionalAttributes
				assignmentType: string
				__typename: string
			}

			export type StudentTaskAdditionalAttributes = {
				cookiesCount: number
				__typename: string
			}

			export type Team = {
				id: string
				teamLead: TeamLead
				members: TeamLead[]
				invitedUsers: unknown[]
				teamName: string
				teamStatus: string
				minTeamMemberCount: number
				maxTeamMemberCount: number
				__typename: string
			}

			export type TeamLead = {
				id: string
				avatarUrl: string
				login: string
				userExperience: UserExperience
				__typename: string
			}

			export type UserExperience = {
				level: Level
				cookiesCount: number
				codeReviewPoints: number
				__typename: string
			}

			export type Level = {
				id: number
				range: Range
				__typename: string
			}

			export type Range = {
				levelCode: number
				__typename: string
			}

			export type VerifiableStudent = {
				id: string
				user: VerifierUser
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace CalendarGetMyBookings {
		export const request = createGqlQueryRequest(
			"query calendarGetMyBookings($from: DateTime!, $to: DateTime!) {\n  student {\n    getMyCalendarBookings(from: $from, to: $to) {\n      ...CalendarReviewBooking\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CalendarReviewBooking on CalendarBooking {\n  id\n  answerId\n  eventSlotId\n  task {\n    id\n    goalId\n    goalName\n    studentTaskAdditionalAttributes {\n      cookiesCount\n      __typename\n    }\n    assignmentType\n    __typename\n  }\n  eventSlot {\n    id\n    start\n    end\n    event {\n      eventUserRole\n      __typename\n    }\n    __typename\n  }\n  verifierUser {\n    ...CalendarReviewUser\n    __typename\n  }\n  verifiableStudent {\n    id\n    user {\n      ...CalendarReviewUser\n      __typename\n    }\n    __typename\n  }\n  bookingStatus\n  team {\n    ...ProjectTeamMembers\n    __typename\n  }\n  isOnline\n  vcLinkUrl\n  __typename\n}\n\nfragment CalendarReviewUser on User {\n  id\n  login\n  __typename\n}\n\nfragment ProjectTeamMembers on ProjectTeamMembers {\n  id\n  teamLead {\n    ...ProjectTeamMember\n    __typename\n  }\n  members {\n    ...ProjectTeamMember\n    __typename\n  }\n  invitedUsers {\n    ...ProjectTeamMember\n    __typename\n  }\n  teamName\n  teamStatus\n  minTeamMemberCount\n  maxTeamMemberCount\n  __typename\n}\n\nfragment ProjectTeamMember on User {\n  id\n  avatarUrl\n  login\n  userExperience {\n    level {\n      id\n      range {\n        levelCode\n        __typename\n      }\n      __typename\n    }\n    cookiesCount\n    codeReviewPoints\n    __typename\n  }\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				from: Date
				to: Date
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getMyCalendarBookings: GetMyCalendarBooking[]
				__typename: string
			}

			export type GetMyCalendarBooking = {
				id: string
				answerId: string
				eventSlotId: string
				task: Task
				eventSlot: EventSlot
				verifierUser: User
				verifiableStudent: VerifiableStudent
				bookingStatus: string
				team: null
				isOnline: boolean
				vcLinkUrl: null
				__typename: string
			}

			export type EventSlot = {
				id: string
				start: Date
				end: Date
				event: Event
				__typename: string
			}

			export type Event = {
				eventUserRole: string
				__typename: string
			}

			export type Task = {
				id: string
				goalId: string
				goalName: string
				studentTaskAdditionalAttributes: StudentTaskAdditionalAttributes
				assignmentType: string
				__typename: string
			}

			export type StudentTaskAdditionalAttributes = {
				cookiesCount: number
				__typename: string
			}

			export type VerifiableStudent = {
				id: string
				user: User
				__typename: string
			}

			export type User = {
				id: string
				login: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace CalendarGetMyReviews {
		export const request = createGqlQueryRequest(
			"query calendarGetMyReviews($to: DateTime, $limit: Int) {\n  student {\n    getMyUpcomingBookings(to: $to, limit: $limit) {\n      ...Review\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment Review on CalendarBooking {\n  id\n  answerId\n  eventSlot {\n    id\n    start\n    end\n    __typename\n  }\n  task {\n    id\n    title\n    assignmentType\n    goalId\n    goalName\n    studentTaskAdditionalAttributes {\n      cookiesCount\n      __typename\n    }\n    __typename\n  }\n  verifierUser {\n    ...UserInBooking\n    __typename\n  }\n  verifiableStudent {\n    id\n    user {\n      ...UserInBooking\n      __typename\n    }\n    __typename\n  }\n  team {\n    ...ProjectTeamMembers\n    __typename\n  }\n  bookingStatus\n  isOnline\n  vcLinkUrl\n  __typename\n}\n\nfragment UserInBooking on User {\n  id\n  login\n  avatarUrl\n  userExperience {\n    level {\n      id\n      range {\n        levelCode\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment ProjectTeamMembers on ProjectTeamMembers {\n  id\n  teamLead {\n    ...ProjectTeamMember\n    __typename\n  }\n  members {\n    ...ProjectTeamMember\n    __typename\n  }\n  invitedUsers {\n    ...ProjectTeamMember\n    __typename\n  }\n  teamName\n  teamStatus\n  minTeamMemberCount\n  maxTeamMemberCount\n  __typename\n}\n\nfragment ProjectTeamMember on User {\n  id\n  avatarUrl\n  login\n  userExperience {\n    level {\n      id\n      range {\n        levelCode\n        __typename\n      }\n      __typename\n    }\n    cookiesCount\n    codeReviewPoints\n    __typename\n  }\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				limit: number
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getMyUpcomingBookings: GetMyUpcomingBooking[]
				__typename: string
			}

			export type GetMyUpcomingBooking = {
				id: string
				answerId: null | string
				eventSlot: EventSlot
				task: Task | null
				verifierUser: User
				verifiableStudent: VerifiableStudent | null
				team: Team | null
				bookingStatus: string
				isOnline: boolean
				vcLinkUrl: null
				__typename: string
			}

			export type EventSlot = {
				id: string
				start: Date
				end: Date
				__typename: string
			}

			export type Task = {
				id: string
				title: string
				assignmentType: string
				goalId: string
				goalName: string
				studentTaskAdditionalAttributes: StudentTaskAdditionalAttributes
				__typename: string
			}

			export type StudentTaskAdditionalAttributes = {
				cookiesCount: number
				__typename: string
			}

			export type Team = {
				id: string
				teamLead: TeamLead
				members: TeamLead[]
				invitedUsers: unknown[]
				teamName: string
				teamStatus: string
				minTeamMemberCount: number
				maxTeamMemberCount: number
				__typename: string
			}

			export type TeamLead = {
				id: string
				avatarUrl: string
				login: string
				userExperience: TeamLeadUserExperience
				__typename: string
			}

			export type TeamLeadUserExperience = {
				level: Level
				cookiesCount: number
				codeReviewPoints: number
				__typename: string
			}

			export type Level = {
				id: number
				range: Range
				__typename: string
			}

			export type Range = {
				levelCode: number
				__typename: string
			}

			export type VerifiableStudent = {
				id: string
				user: User
				__typename: string
			}

			export type User = {
				id: string
				login: string
				avatarUrl: string
				userExperience: VerifierUserUserExperience
				__typename: string
			}

			export type VerifierUserUserExperience = {
				level: Level
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetPenaltyReasons {
		export const request = createGqlQueryRequest(
			"query getPenaltyReasons {\n  school21 {\n    getPenaltyReasons {\n      id\n      name\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				school21: School21
			}

			export type School21 = {
				getPenaltyReasons: GetPenaltyReason[]
				__typename: string
			}

			export type GetPenaltyReason = {
				id: string
				name: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace CalendarDeleteEventSlot {
		export const request = createGqlQueryRequest(
			"mutation calendarDeleteEventSlot($eventSlotId: ID!) {\n  student {\n    deleteEventSlot(eventSlotId: $eventSlotId)\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				eventSlotId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				deleteEventSlot: boolean
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetAgendaP2P {
		export const request = createGqlQueryRequest(
			"query getAgendaP2P($bookingId: ID!) {\n  student {\n    getEnrichedBooking(bookingId: $bookingId) {\n      id\n      eventSlot {\n        start\n        __typename\n      }\n      task {\n        goalId\n        goalName\n        assignmentType\n        studentTaskAdditionalAttributes {\n          cookiesCount\n          __typename\n        }\n        __typename\n      }\n      verifierUser {\n        id\n        login\n        avatarUrl\n        userExperience {\n          level {\n            range {\n              levelCode\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      verifiableStudent {\n        user {\n          id\n          login\n          avatarUrl\n          userExperience {\n            level {\n              range {\n                levelCode\n                __typename\n              }\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      answerId\n      team {\n        teamName\n        teamLead {\n          id\n          avatarUrl\n          login\n          userExperience {\n            level {\n              range {\n                levelCode\n                __typename\n              }\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        members {\n          id\n          avatarUrl\n          login\n          userExperience {\n            level {\n              range {\n                levelCode\n                __typename\n              }\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      bookingStatus\n      isOnline\n      vcLinkUrl\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				bookingId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getEnrichedBooking: GetEnrichedBooking
				__typename: string
			}

			export type GetEnrichedBooking = {
				id: string
				eventSlot: EventSlot
				task: Task | null
				verifierUser: VerifierUser
				verifiableStudent: VerifiableStudent | null
				answerId: null | string
				team: Team | null
				bookingStatus: string
				isOnline: boolean
				vcLinkUrl: null
				__typename: string
			}

			export type EventSlot = {
				start: Date
				__typename: string
			}

			export type Task = {
				goalId: string
				goalName: string
				assignmentType: string
				studentTaskAdditionalAttributes: StudentTaskAdditionalAttributes
				__typename: string
			}

			export type StudentTaskAdditionalAttributes = {
				cookiesCount: number
				__typename: string
			}

			export type Team = {
				teamName: string
				teamLead: VerifierUser
				members: VerifierUser[]
				__typename: string
			}

			export type VerifierUser = {
				id: string
				login: string
				avatarUrl: string
				userExperience: UserExperience
				__typename: string
			}

			export type UserExperience = {
				level: Level
				__typename: string
			}

			export type Level = {
				range: Range
				__typename: string
			}

			export type Range = {
				levelCode: number
				__typename: string
			}

			export type VerifiableStudent = {
				user: VerifierUser
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace CreateFilledChecklist {
		export const request = createGqlQueryRequest(
			"mutation createFilledChecklist($studentAnswerId: ID!) {\n  student {\n    createFilledChecklist(studentAnswerId: $studentAnswerId) {\n      id\n      gitlabStudentProjectUrl {\n        sshLink\n        httpsLink\n        __typename\n      }\n      checklist {\n        ...FormChecklist\n        __typename\n      }\n      moduleInfoP2P {\n        ...FilledChecklistModuleInfo\n        __typename\n      }\n      progressCheckInfo {\n        reviewUserCount\n        reviewUserCountExecuted\n        __typename\n      }\n      verifiableUsers {\n        teamWithMembers {\n          team {\n            id\n            name\n            __typename\n          }\n          members {\n            ...TeamMember\n            __typename\n          }\n          __typename\n        }\n        user {\n          ...TeamMemberUser\n          __typename\n        }\n        __typename\n      }\n      video {\n        filledChecklistId\n        link\n        status\n        statusDetails\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment FormChecklist on Checklist {\n  language\n  introduction\n  guidelines\n  sectionList {\n    ...FormChecklistSection\n    __typename\n  }\n  quickActions\n  __typename\n}\n\nfragment FormChecklistSection on ChecklistSection {\n  checklistSectionId\n  name\n  description\n  kindQuestionId\n  questionList {\n    ...FormChecklistQuestion\n    __typename\n  }\n  __typename\n}\n\nfragment FormChecklistQuestion on SectionQuestion {\n  sectionQuestionId\n  name\n  description\n  taskAssessmentScale {\n    criterionScaleId\n    type\n    description\n    scaleWeights {\n      key\n      value\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment FilledChecklistModuleInfo on ModuleInfoP2P {\n  moduleName\n  executionType\n  periodOfVerification\n  __typename\n}\n\nfragment TeamMember on TeamMember {\n  user {\n    ...TeamMemberUser\n    __typename\n  }\n  role\n  __typename\n}\n\nfragment TeamMemberUser on User {\n  id\n  avatarUrl\n  login\n  userExperience {\n    level {\n      id\n      levelCode\n      range {\n        levelCode\n        __typename\n      }\n      __typename\n    }\n    cookiesCount\n    codeReviewPoints\n    __typename\n  }\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				studentAnswerId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				createFilledChecklist: CreateFilledChecklist
				__typename: string
			}

			export type CreateFilledChecklist = {
				id: string
				gitlabStudentProjectUrl: GitlabStudentProjectURL
				checklist: Checklist
				moduleInfoP2P: ModuleInfoP2P
				progressCheckInfo: ProgressCheckInfo
				verifiableUsers: VerifiableUsers
				video: null
				__typename: string
			}

			export type Checklist = {
				language: string
				introduction: string
				guidelines: string
				sectionList: SectionList[]
				quickActions: string[]
				__typename: string
			}

			export type SectionList = {
				checklistSectionId: string
				name: string
				description: string
				kindQuestionId: string
				questionList: QuestionList[]
				__typename: string
			}

			export type QuestionList = {
				sectionQuestionId: string
				name: string
				description: string
				taskAssessmentScale: TaskAssessmentScale
				__typename: string
			}

			export type TaskAssessmentScale = {
				criterionScaleId: string
				type: string
				description: string
				scaleWeights: ScaleWeight[]
				__typename: string
			}

			export type ScaleWeight = {
				key: string
				value: string
				__typename: string
			}

			export type GitlabStudentProjectURL = {
				sshLink: string
				httpsLink: string
				__typename: string
			}

			export type ModuleInfoP2P = {
				moduleName: string
				executionType: string
				periodOfVerification: number
				__typename: string
			}

			export type ProgressCheckInfo = {
				reviewUserCount: number
				reviewUserCountExecuted: number
				__typename: string
			}

			export type VerifiableUsers = {
				teamWithMembers: TeamWithMembers
				user: null
				__typename: string
			}

			export type TeamWithMembers = {
				team: Team
				members: Member[]
				__typename: string
			}

			export type Member = {
				user: User
				role: string
				__typename: string
			}

			export type User = {
				id: string
				avatarUrl: string
				login: string
				userExperience: UserExperience
				__typename: string
			}

			export type UserExperience = {
				level: Level
				cookiesCount: number
				codeReviewPoints: number
				__typename: string
			}

			export type Level = {
				id: number
				levelCode: number
				range: Range
				__typename: string
			}

			export type Range = {
				levelCode: number
				__typename: string
			}

			export type Team = {
				id: string
				name: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetCredentialsByLogin {
		export const request = createGqlQueryRequest(
			"query getCredentialsByLogin($login: String!) {\n  school21 {\n    getStudentByLogin(login: $login) {\n      studentId\n      userId\n      schoolId\n      isActive\n      isGraduate\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				login: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				school21: School21
			}

			export type School21 = {
				getStudentByLogin: GetStudentByLogin
				__typename: string
			}

			export type GetStudentByLogin = {
				studentId: string
				userId: string
				schoolId: string
				isActive: boolean
				isGraduate: boolean
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace PublicProfileGetPersonalInfo {
		export const request = createGqlQueryRequest(
			"query publicProfileGetPersonalInfo($userId: UUID!, $studentId: UUID!, $login: String!, $schoolId: UUID!) {\n  student {\n    getAvatarByUserId(userId: $userId)\n    getStageGroupS21PublicProfile(studentId: $studentId) {\n      waveId\n      waveName\n      eduForm\n      __typename\n    }\n    getExperiencePublicProfile(userId: $userId) {\n      value\n      level {\n        levelCode\n        range {\n          leftBorder\n          rightBorder\n          __typename\n        }\n        __typename\n      }\n      cookiesCount\n      coinsCount\n      codeReviewPoints\n      __typename\n    }\n    getEmailbyUserId(userId: $userId)\n    getWorkstationByLogin(login: $login) {\n      workstationId\n      hostName\n      row\n      number\n      __typename\n    }\n    getClassRoomByLogin(login: $login) {\n      id\n      number\n      floor\n      __typename\n    }\n    getFeedbackStatisticsAverageScore(studentId: $studentId) {\n      countFeedback\n      feedbackAverageScore {\n        categoryCode\n        categoryName\n        value\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  user {\n    getSchool(schoolId: $schoolId) {\n      id\n      fullName\n      shortName\n      address\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				userId: string
				studentId: string
				schoolId: string
				login: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
				user: User
			}

			export type Student = {
				getAvatarByUserId: string
				getStageGroupS21PublicProfile: GetStageGroupS21PublicProfile
				getExperiencePublicProfile: GetExperiencePublicProfile
				getEmailbyUserId: string
				getWorkstationByLogin: GetWorkstationByLogin | null
				getClassRoomByLogin: GetClassRoomByLogin | null
				getFeedbackStatisticsAverageScore: GetFeedbackStatisticsAverageScore
				__typename: string
			}

			export type GetClassRoomByLogin = {
				id: string
				number: string
				floor: number
				__typename: string
			}

			export type GetExperiencePublicProfile = {
				value: number
				level: Level
				cookiesCount: number
				coinsCount: number
				codeReviewPoints: number
				__typename: string
			}

			export type Level = {
				levelCode: number
				range: Range
				__typename: string
			}

			export type Range = {
				leftBorder: number
				rightBorder: number
				__typename: string
			}

			export type GetFeedbackStatisticsAverageScore = {
				countFeedback: number
				feedbackAverageScore: FeedbackAverageScore[]
				__typename: string
			}

			export type FeedbackAverageScore = {
				categoryCode: string
				categoryName: string
				value: string
				__typename: string
			}

			export type GetStageGroupS21PublicProfile = {
				waveId: number
				waveName: string
				eduForm: string
				__typename: string
			}

			export type GetWorkstationByLogin = {
				workstationId: number
				hostName: string
				row: string
				number: number
				__typename: string
			}

			export type User = {
				getSchool: GetSchool
				__typename: string
			}

			export type GetSchool = {
				id: string
				fullName: string
				shortName: string
				address: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetDismissInfoByStudentId {
		export const request = createGqlQueryRequest(
			"query getDismissInfoByStudentId($studentId: UUID!) {\n  school21 {\n    getDismissInfoByStudentId(studentId: $studentId) {\n      dismissTypeId\n      dismissTs\n      lastStageGroupS21 {\n        waveId\n        waveName\n        eduForm\n        active\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				studentId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				school21: School21
			}

			export type School21 = {
				getDismissInfoByStudentId: null
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace PublicProfileGetCoalition {
		export const request = createGqlQueryRequest(
			"query publicProfileGetCoalition($userId: UUID!) {\n  student {\n    getUserTournamentWidget(userId: $userId) {\n      coalitionMember {\n        coalition {\n          avatarUrl\n          color\n          name\n          memberCount\n          __typename\n        }\n        currentTournamentPowerRank {\n          rank\n          power {\n            id\n            points\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      lastTournamentResult {\n        userRank\n        power\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				userId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getUserTournamentWidget: GetUserTournamentWidget
				__typename: string
			}

			export type GetUserTournamentWidget = {
				coalitionMember: CoalitionMember
				lastTournamentResult: LastTournamentResult
				__typename: string
			}

			export type CoalitionMember = {
				coalition: Coalition
				currentTournamentPowerRank: CurrentTournamentPowerRank
				__typename: string
			}

			export type Coalition = {
				avatarUrl: string
				color: string
				name: string
				memberCount: number
				__typename: string
			}

			export type CurrentTournamentPowerRank = {
				rank: number
				power: Power
				__typename: string
			}

			export type Power = {
				id: string
				points: number
				__typename: string
			}

			export type LastTournamentResult = {
				userRank: number
				power: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace PublicProfileGetAchievements {
		export const request = createGqlQueryRequest(
			"query publicProfileGetAchievements($userId: UUID!) {\n  student {\n    getBadgesPublicProfile(userId: $userId) {\n      points\n      id\n      badge {\n        id\n        name\n        avatarUrl\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				userId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getBadgesPublicProfile: GetBadgesPublicProfile[]
				__typename: string
			}

			export type GetBadgesPublicProfile = {
				points: number
				id: string
				badge: Badge
				__typename: string
			}

			export type Badge = {
				id: string
				name: string
				avatarUrl: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace PublicProfileLoadAverageLogtime {
		export const request = createGqlQueryRequest(
			"query publicProfileLoadAverageLogtime($login: String!, $schoolID: UUID!, $date: Date!) {\n  school21 {\n    loadAverageLogtime(login: $login, schoolID: $schoolID, date: $date) {\n      week\n      month\n      weekPerMonth\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				login: string
				schoolID: string
				date: Date
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				school21: School21
			}

			export type School21 = {
				loadAverageLogtime: LoadAverageLogtime
				__typename: string
			}

			export type LoadAverageLogtime = {
				week: number
				month: number
				weekPerMonth: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace PublicProfileLoadStageGroups {
		export const request = createGqlQueryRequest(
			"query publicProfileLoadStageGroups($userId: UUID!, $schoolId: UUID!) {\n  school21 {\n    loadStudentStageGroupsS21PublicProfile(userId: $userId, schoolId: $schoolId) {\n      stageGroupStudentId\n      studentId\n      stageGroupS21 {\n        waveId\n        waveName\n        eduForm\n        active\n        __typename\n      }\n      safeSchool {\n        fullName\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				userId: string
				schoolId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				school21: School21
			}

			export type School21 = {
				loadStudentStageGroupsS21PublicProfile: LoadStudentStageGroupsS21PublicProfile[]
				__typename: string
			}

			export type LoadStudentStageGroupsS21PublicProfile = {
				stageGroupStudentId: string
				studentId: string
				stageGroupS21: StageGroupS21
				safeSchool: SafeSchool
				__typename: string
			}

			export type SafeSchool = {
				fullName: string
				__typename: string
			}

			export type StageGroupS21 = {
				waveId: number
				waveName: string
				eduForm: string
				active: boolean
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace PublicProfileGetSoftSkills {
		export const request = createGqlQueryRequest(
			"query publicProfileGetSoftSkills($studentId: UUID!) {\n  school21 {\n    getSoftSkillsByStudentId(studentId: $studentId) {\n      id\n      type\n      code\n      totalPower\n      hueSaturationLightness\n      __typename\n    }\n    getSoftSkillLimitByStudentId(studentId: $studentId) {\n      powerLimit\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				studentId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				school21: School21
			}

			export type School21 = {
				getSoftSkillsByStudentId: GetSoftSkillsByStudentID[]
				getSoftSkillLimitByStudentId: GetSoftSkillLimitByStudentID
				__typename: string
			}

			export type GetSoftSkillLimitByStudentID = {
				powerLimit: number
				__typename: string
			}

			export type GetSoftSkillsByStudentID = {
				id: string
				type: string
				code: string
				totalPower: number
				hueSaturationLightness: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace PublicProfileGetXpGraph {
		export const request = createGqlQueryRequest(
			"query publicProfileGetXpGraph($userId: UUID!) {\n  student {\n    getExperienceHistoryDate(userId: $userId) {\n      history {\n        awardDate\n        expValue\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				userId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getExperienceHistoryDate: GetExperienceHistoryDate
				__typename: string
			}

			export type GetExperienceHistoryDate = {
				history: History[]
				__typename: string
			}

			export type History = {
				awardDate: Date
				expValue: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace PublicProfileGetStudentTraffic {
		export const request = createGqlQueryRequest(
			"query publicProfileGetStudentTraffic($login: String!, $schoolID: UUID!, $date: Date!) {\n  student {\n    getStudentTraffic(login: $login, schoolID: $schoolID, date: $date) {\n      days {\n        date\n        periodOnCampus\n        periodAuthorizSDP\n        periodAuthorizIMac\n        __typename\n      }\n      endDate\n      startDate\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				login: string
				schoolID: string
				date: Date
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getStudentTraffic: GetStudentTraffic
				__typename: string
			}

			export type GetStudentTraffic = {
				days: Day[]
				endDate: Date
				startDate: Date
				__typename: string
			}

			export type Day = {
				date: Date
				periodOnCampus: string
				periodAuthorizSDP: string
				periodAuthorizIMac: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetUserNotifications {
		export const request = createGqlQueryRequest(
			"query getUserNotifications($paging: PagingInput!) {\n  student {\n    getS21Notifications(paging: $paging) {\n      notifications {\n        id\n        relatedObjectType\n        relatedObjectId\n        message\n        time\n        wasRead\n        groupName\n        __typename\n      }\n      totalCount\n      groupNames\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				paging: Paging
			}

			export type Paging = {
				offset: number
				limit: number
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getS21Notifications: GetS21Notifications
				__typename: string
			}

			export type GetS21Notifications = {
				notifications: Notification[]
				totalCount: number
				groupNames: string[]
				__typename: string
			}

			export type Notification = {
				id: string
				relatedObjectType: string
				relatedObjectId: string
				message: string
				time: Date
				wasRead: boolean
				groupName: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace ReadUserNotifications {
		export const request = createGqlQueryRequest(
			"mutation readUserNotifications($notificationIds: [ID!]!) {\n  student {\n    readNotifications(notificationIds: $notificationIds)\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				notificationIds: string[]
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				readNotifications: string[]
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace SaveFilledChecklist {
		export const request = createGqlQueryRequest(
			"mutation saveFilledChecklist($filledChecklistInput: ChecklistFilledInput!) {\n  student {\n    completeP2pCheck(checklistFilledInput: $filledChecklistInput)\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				filledChecklistInput: FilledChecklistInput
			}

			export type FilledChecklistInput = {
				quickAction: null
				comment: string
				scoreQuestions: ScoreQuestion[]
				filledChecklistId: string
			}

			export type ScoreQuestion = {
				sectionQuestionId: string
				ratingWeightId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				completeP2pCheck: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetInvitationsCount {
		export const request = createGqlQueryRequest(
			"query getInvitationsCount {\n  team {\n    getCreatedJoinTeamRequestCount\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				team: Team
			}

			export type Team = {
				getCreatedJoinTeamRequestCount: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetStudentCurrentProjects {
		export const request = createGqlQueryRequest(
			"query getStudentCurrentProjects($userId: ID!) {\n  student {\n    getStudentCurrentProjects(userId: $userId) {\n      ...StudentProjectItem\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment StudentProjectItem on StudentItem {\n  goalId\n  name\n  description\n  experience\n  dateTime\n  finalPercentage\n  laboriousness\n  executionType\n  goalStatus\n  courseType\n  displayedCourseStatus\n  amountAnswers\n  amountMembers\n  amountJoinedMembers\n  amountReviewedAnswers\n  amountCodeReviewMembers\n  amountCurrentCodeReviewMembers\n  groupName\n  localCourseId\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				userId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getStudentCurrentProjects: GetStudentCurrentProject[]
				__typename: string
			}

			export type GetStudentCurrentProject = {
				goalId: number | null
				name: string
				description: string
				experience: number
				dateTime: null
				finalPercentage: null
				laboriousness: number
				executionType: null | string
				goalStatus: null | string
				courseType: null | string
				displayedCourseStatus: null | string
				amountAnswers: number | null
				amountMembers: number | null
				amountJoinedMembers: number | null
				amountReviewedAnswers: number | null
				amountCodeReviewMembers: number | null
				amountCurrentCodeReviewMembers: number | null
				groupName: string
				localCourseId: number | null
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetAvailableCodeReviewProjects {
		export const request = createGqlQueryRequest(
			"query getAvailableCodeReviewProjects($paging: PagingInput!) {\n  student {\n    getAvailableCodeReviewProjects(paging: $paging) {\n      ...CodeReviewProject\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CodeReviewProject on CodeReview {\n  goalId\n  goalTitle\n  studentGoalId\n  studentCodeReviewStatus\n  goalExecutionType\n  studentTaskAdditionalAttributesModel {\n    codeReviewCost\n    codeReviewDuration\n    __typename\n  }\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				paging: Paging
			}

			export type Paging = {
				offset: number
				limit: number
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getAvailableCodeReviewProjects: GetAvailableCodeReviewProject[]
				__typename: string
			}

			export type GetAvailableCodeReviewProject = {
				goalId: string
				goalTitle: string
				studentGoalId: string
				studentCodeReviewStatus: string
				goalExecutionType: string
				studentTaskAdditionalAttributesModel: StudentTaskAdditionalAttributesModel
				__typename: string
			}

			export type StudentTaskAdditionalAttributesModel = {
				codeReviewCost: number
				codeReviewDuration: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetFirstRoundCodeReviewProjects {
		export const request = createGqlQueryRequest(
			"query getFirstRoundCodeReviewProjects($paging: PagingInput!) {\n  student {\n    getFirstRoundCodeReviewProjects(paging: $paging) {\n      ...CodeReviewProject\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CodeReviewProject on CodeReview {\n  goalId\n  goalTitle\n  studentGoalId\n  studentCodeReviewStatus\n  goalExecutionType\n  studentTaskAdditionalAttributesModel {\n    codeReviewCost\n    codeReviewDuration\n    __typename\n  }\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				paging: Paging
			}

			export type Paging = {
				offset: number
				limit: number
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getFirstRoundCodeReviewProjects: unknown[]
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetSecondRoundCodeReviewProjects {
		export const request = createGqlQueryRequest(
			"query getSecondRoundCodeReviewProjects($paging: PagingInput!) {\n  student {\n    getSecondRoundCodeReviewProjects(paging: $paging) {\n      ...CodeReviewProject\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CodeReviewProject on CodeReview {\n  goalId\n  goalTitle\n  studentGoalId\n  studentCodeReviewStatus\n  goalExecutionType\n  studentTaskAdditionalAttributesModel {\n    codeReviewCost\n    codeReviewDuration\n    __typename\n  }\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				paging: Paging
			}

			export type Paging = {
				offset: number
				limit: number
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getSecondRoundCodeReviewProjects: unknown[]
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetCodeReviewProjectInfo {
		export const request = createGqlQueryRequest(
			"query getCodeReviewProjectInfo($studentGoalId: ID!) {\n  student {\n    getStudentModuleByStudentGoalId(studentGoalId: $studentGoalId) {\n      ...CodeReviewProjectInfo\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CodeReviewProjectInfo on StudentModule {\n  id\n  moduleTitle\n  studyModule {\n    duration\n    stage {\n      name\n      __typename\n    }\n    __typename\n  }\n  currentTask {\n    ...CodeReviewCurrentTaskInfo\n    __typename\n  }\n  __typename\n}\n\nfragment CodeReviewCurrentTaskInfo on StudentTask {\n  id\n  taskId\n  task {\n    content {\n      body\n      __typename\n    }\n    assignmentType\n    studentTaskAdditionalAttributes {\n      codeReviewDuration\n      codeReviewCost\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				studentGoalId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getStudentModuleByStudentGoalId: GetStudentModuleByStudentGoalID
				__typename: string
			}

			export type GetStudentModuleByStudentGoalID = {
				id: string
				moduleTitle: string
				studyModule: StudyModule
				currentTask: CurrentTask
				__typename: string
			}

			export type CurrentTask = {
				id: string
				taskId: string
				task: Task
				__typename: string
			}

			export type Task = {
				content: Content
				assignmentType: string
				studentTaskAdditionalAttributes: StudentTaskAdditionalAttributes
				__typename: string
			}

			export type Content = {
				body: string
				__typename: string
			}

			export type StudentTaskAdditionalAttributes = {
				codeReviewDuration: number
				codeReviewCost: number
				__typename: string
			}

			export type StudyModule = {
				duration: number
				stage: Stage
				__typename: string
			}

			export type Stage = {
				name: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetCodeReviewMyStudent {
		export const request = createGqlQueryRequest(
			"query getCodeReviewMyStudent($studentGoalId: ID!) {\n  student {\n    getMyStudentCodeReview(studentGoalId: $studentGoalId) {\n      reviewerCommentsCount\n      codeReviewRounds {\n        ...CodeReviewRound\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CodeReviewRound on CodeReviewRound {\n  eventId\n  codeReviewRoundType\n  codeReviewStatus\n  startTime\n  endTime\n  mergeRequestURL\n  createTime\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				studentGoalId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getMyStudentCodeReview: GetMyStudentCodeReview | null
				__typename: string
			}

			export type GetMyStudentCodeReview = {
				reviewerCommentsCount: number
				codeReviewRounds: CodeReviewRound[]
				__typename: string
			}

			export type CodeReviewRound = {
				eventId: null | string
				codeReviewRoundType: string
				codeReviewStatus: string
				startTime: Date
				endTime: Date
				mergeRequestURL: string
				createTime: Date
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace CalendarGetStudentCodeReviews {
		export const request = createGqlQueryRequest(
			"query calendarGetStudentCodeReviews($studentGoalId: ID!) {\n  student {\n    getStudentCodeReviews(studentGoalId: $studentGoalId) {\n      secondRoundStartDate\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				studentGoalId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getStudentCodeReviews: GetStudentCodeReviews
				__typename: string
			}

			export type GetStudentCodeReviews = {
				secondRoundStartDate: Date
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace CalendarGetCodeReviewData {
		export const request = createGqlQueryRequest(
			"query calendarGetCodeReviewData($studentGoalId: ID!) {\n  student {\n    getStudentModuleByStudentGoalId(studentGoalId: $studentGoalId) {\n      moduleTitle\n      currentTask {\n        task {\n          studentTaskAdditionalAttributes {\n            codeReviewDuration\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				studentGoalId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getStudentModuleByStudentGoalId: GetStudentModuleByStudentGoalID
				__typename: string
			}

			export type GetStudentModuleByStudentGoalID = {
				moduleTitle: string
				currentTask: CurrentTask
				__typename: string
			}

			export type CurrentTask = {
				task: Task
				__typename: string
			}

			export type Task = {
				studentTaskAdditionalAttributes: StudentTaskAdditionalAttributes
				__typename: string
			}

			export type StudentTaskAdditionalAttributes = {
				codeReviewDuration: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace CalendarAddCodeReviewToEventSlot {
		export const request = createGqlQueryRequest(
			"mutation calendarAddCodeReviewToEventSlot($studentGoalId: ID!, $startTime: DateTime!) {\n  student {\n    addBookingCodeReviewToEventSlot(\n      studentGoalId: $studentGoalId\n      startTime: $startTime\n    ) {\n      id\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				studentGoalId: string
				startTime: Date
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				addBookingCodeReviewToEventSlot: AddBookingCodeReviewToEventSlot
				__typename: string
			}

			export type AddBookingCodeReviewToEventSlot = {
				id: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace CalendarAddBookingToEventSlot {
		export const request = createGqlQueryRequest(
			"mutation calendarAddBookingToEventSlot(\n	$answerId: ID!\n	$startTime: DateTime!\n	$wasStaffSlotChosen: Boolean!\n	$isOnline: Boolean\n) {\n	student {\n		addBookingP2PToEventSlot(\n			answerId: $answerId\n			startTime: $startTime\n			wasStaffSlotChosen: $wasStaffSlotChosen\n			isOnline: $isOnline\n		) {\n			id\n			__typename\n		}\n		__typename\n	}\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				answerId: string
				startTime: string
				wasStaffSlotChosen: string
				isOnline: boolean
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				addBookingP2PToEventSlot: AddBookingP2PToEventSlot
				__typename: string
			}

			export type AddBookingP2PToEventSlot = {
				id: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetCodeReviewPointChargedOff {
		export const request = createGqlQueryRequest(
			"query getCodeReviewPointChargedOff($goalId: ID!) {\n  student {\n    getCodeReviewPointChargedOff(goalId: $goalId)\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				goalId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getCodeReviewPointChargedOff: boolean
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetProjectConsistencyInfo {
		export const request = createGqlQueryRequest(
			"query getProjectConsistencyInfo($goalId: ID!) {\n  school21 {\n    loadGoalConsistencyInfo(goalId: $goalId) {\n      goalId\n      isConsistent\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				goalId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				school21: School21
			}

			export type School21 = {
				loadGoalConsistencyInfo: LoadGoalConsistencyInfo
				__typename: string
			}

			export type LoadGoalConsistencyInfo = {
				goalId: string
				isConsistent: boolean
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetProjectInfo {
		export const request = createGqlQueryRequest(
			"query getProjectInfo($goalId: ID!) {\n  student {\n    getModuleById(goalId: $goalId) {\n      ...ProjectInfo\n      __typename\n    }\n    getModuleCoverInformation(goalId: $goalId) {\n      ...ModuleCoverInfo\n      __typename\n    }\n    getP2PChecksInfo(goalId: $goalId) {\n      ...P2PInfo\n      __typename\n    }\n    getStudentCodeReviewByGoalId(goalId: $goalId) {\n      ...StudentsCodeReview\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ProjectInfo on StudentModule {\n  id\n  moduleTitle\n  finalPercentage\n  finalPoint\n  goalExecutionType\n  displayedGoalStatus\n  accessBeforeStartProgress\n  resultModuleCompletion\n  finishedExecutionDateByScheduler\n  durationFromStageSubjectGroupPlan\n  currentAttemptNumber\n  isDeadlineFree\n  isRetryAvailable\n  localCourseId\n  courseBaseParameters {\n    isGradedCourse\n    __typename\n  }\n  teamSettings {\n    ...teamSettingsInfo\n    __typename\n  }\n  studyModule {\n    id\n    idea\n    duration\n    goalPoint\n    retrySettings {\n      ...RetrySettings\n      __typename\n    }\n    levels {\n      id\n      goalElements {\n        id\n        tasks {\n          id\n          taskId\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  currentTask {\n    ...CurrentInternshipTaskInfo\n    __typename\n  }\n  __typename\n}\n\nfragment teamSettingsInfo on TeamSettings {\n  teamCreateOption\n  minAmountMember\n  maxAmountMember\n  enableSurrenderTeam\n  __typename\n}\n\nfragment RetrySettings on ModuleAttemptsSettings {\n  maxModuleAttempts\n  isUnlimitedAttempts\n  __typename\n}\n\nfragment CurrentInternshipTaskInfo on StudentTask {\n  id\n  taskId\n  task {\n    id\n    assignmentType\n    studentTaskAdditionalAttributes {\n      cookiesCount\n      maxCodeReviewCount\n      codeReviewCost\n      ciCdMode\n      __typename\n    }\n    checkTypes\n    __typename\n  }\n  lastAnswer {\n    id\n    __typename\n  }\n  teamSettings {\n    ...teamSettingsInfo\n    __typename\n  }\n  __typename\n}\n\nfragment ModuleCoverInfo on ModuleCoverInformation {\n  isOwnStudentTimeline\n  softSkills {\n    softSkillId\n    softSkillName\n    totalPower\n    maxPower\n    currentUserPower\n    achievedUserPower\n    teamRole\n    __typename\n  }\n  timeline {\n    ...TimelineItem\n    __typename\n  }\n  projectStatistics {\n    ...ProjectStatistics\n    __typename\n  }\n  __typename\n}\n\nfragment TimelineItem on ProjectTimelineItem {\n  type\n  status\n  start\n  end\n  children {\n    ...TimelineItemChildren\n    __typename\n  }\n  __typename\n}\n\nfragment TimelineItemChildren on ProjectTimelineItem {\n  type\n  elementType\n  status\n  start\n  end\n  order\n  __typename\n}\n\nfragment ProjectStatistics on ProjectStatistics {\n  registeredStudents\n  inProgressStudents\n  evaluationStudents\n  finishedStudents\n  acceptedStudents\n  failedStudents\n  retriedStudentsPercentage\n  groupProjectStatistics {\n    ...GroupProjectStatistics\n    __typename\n  }\n  __typename\n}\n\nfragment GroupProjectStatistics on GroupProjectStatistics {\n  inProgressTeams\n  evaluationTeams\n  finishedTeams\n  acceptedTeams\n  failedTeams\n  __typename\n}\n\nfragment P2PInfo on P2PChecksInfo {\n  cookiesCount\n  periodOfVerification\n  projectReviewsInfo {\n    ...ProjectReviewsInfo\n    __typename\n  }\n  __typename\n}\n\nfragment ProjectReviewsInfo on ProjectReviewsInfo {\n  reviewByStudentCount\n  relevantReviewByStudentsCount\n  reviewByInspectionStaffCount\n  relevantReviewByInspectionStaffCount\n  __typename\n}\n\nfragment StudentsCodeReview on StudentCodeReviewsWithCountRound {\n  countRound1\n  countRound2\n  codeReviewsInfo {\n    maxCodeReviewCount\n    codeReviewDuration\n    codeReviewCost\n    __typename\n  }\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				goalId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getModuleById: GetModuleByID
				getModuleCoverInformation: GetModuleCoverInformation
				getP2PChecksInfo: GetP2PChecksInfo
				getStudentCodeReviewByGoalId: GetStudentCodeReviewByGoalID
				__typename: string
			}

			export type GetModuleByID = {
				id: string
				moduleTitle: string
				finalPercentage: number | null
				finalPoint: number | null
				goalExecutionType: string
				displayedGoalStatus: string
				accessBeforeStartProgress: boolean
				resultModuleCompletion: null | string
				finishedExecutionDateByScheduler: null
				durationFromStageSubjectGroupPlan: number
				currentAttemptNumber: number
				isDeadlineFree: boolean
				isRetryAvailable: boolean
				localCourseId: null
				courseBaseParameters?: null
				teamSettings: TeamSettings | null
				studyModule: StudyModule
				currentTask: CurrentTask
				__typename: string
			}

			export type CurrentTask = {
				id: string
				taskId: string
				task: CurrentTaskTask
				lastAnswer: LastAnswer | null
				teamSettings: TeamSettings | null
				__typename: string
			}

			export type LastAnswer = {
				id: string
				__typename: string
			}

			export type CurrentTaskTask = {
				id: string
				assignmentType: string
				studentTaskAdditionalAttributes: StudentTaskAdditionalAttributes
				checkTypes: string[]
				__typename: string
			}

			export type StudentTaskAdditionalAttributes = {
				cookiesCount: number
				maxCodeReviewCount: number
				codeReviewCost: number
				ciCdMode: string
				__typename: string
			}

			export type TeamSettings = {
				teamCreateOption: string
				minAmountMember: number
				maxAmountMember: number
				enableSurrenderTeam: boolean
				__typename: string
			}

			export type StudyModule = {
				id: string
				idea: string
				duration: number
				goalPoint: number
				retrySettings: RetrySettings
				levels: Level[]
				__typename: string
			}

			export type Level = {
				id: string
				goalElements: GoalElement[]
				__typename: string
			}

			export type GoalElement = {
				id: string
				tasks: TaskElement[]
				__typename: string
			}

			export type TaskElement = {
				id: string
				taskId: string
				__typename: string
			}

			export type RetrySettings = {
				maxModuleAttempts: number
				isUnlimitedAttempts: boolean
				__typename: string
			}

			export type GetModuleCoverInformation = {
				isOwnStudentTimeline: boolean
				softSkills: SoftSkill[]
				timeline: Timeline[]
				projectStatistics: ProjectStatistics
				__typename: string
			}

			export type ProjectStatistics = {
				registeredStudents: number
				inProgressStudents: number
				evaluationStudents: number
				finishedStudents: number
				acceptedStudents: number
				failedStudents: number
				retriedStudentsPercentage: number
				groupProjectStatistics: GroupProjectStatistics | null
				__typename: string
			}

			export type GroupProjectStatistics = {
				inProgressTeams: number
				evaluationTeams: number
				finishedTeams: number
				acceptedTeams: number
				failedTeams: number
				__typename: string
			}

			export type SoftSkill = {
				softSkillId: number
				softSkillName: string
				totalPower: number
				maxPower: number
				currentUserPower: number
				achievedUserPower: number | null
				teamRole: null | string
				__typename: string
			}

			export type Timeline = {
				type: string
				status: string
				start: null
				end: null
				children: Child[] | null
				__typename: string
			}

			export type Child = {
				type: string
				elementType: string
				status: string
				start: Date | null
				end: Date | null
				order: number
				__typename: string
			}

			export type GetP2PChecksInfo = {
				cookiesCount: number
				periodOfVerification: number
				projectReviewsInfo: ProjectReviewsInfo
				__typename: string
			}

			export type ProjectReviewsInfo = {
				reviewByStudentCount: number
				relevantReviewByStudentsCount: number
				reviewByInspectionStaffCount: number
				relevantReviewByInspectionStaffCount: number
				__typename: string
			}

			export type GetStudentCodeReviewByGoalID = {
				countRound1: number
				countRound2: number
				codeReviewsInfo: null
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetProjectAttemptEvaluationsInfo {
		export const request = createGqlQueryRequest(
			"query getProjectAttemptEvaluationsInfo($goalId: ID!, $studentId: UUID!) {\n  school21 {\n    getProjectAttemptEvaluationsInfo_V1(goalId: $goalId, studentId: $studentId) {\n      ...ProjectAttemptEvaluations_V1\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ProjectAttemptEvaluations_V1 on ProjectAttemptEvaluationsInfo_V1 {\n  studentAnswerId\n  studentGoalAttemptId\n  attemptStatus\n  attemptResult {\n    ...AtemptResult\n    __typename\n  }\n  team {\n    ...AttemptTeamWithMembers\n    __typename\n  }\n  p2p {\n    ...P2PEvaluation\n    __typename\n  }\n  auto {\n    status\n    receivedPercentage\n    endTimeCheck\n    resultInfo\n    __typename\n  }\n  codeReview {\n    averageMark\n    studentCodeReviews {\n      user {\n        avatarUrl\n        login\n        __typename\n      }\n      finalMark\n      markTime\n      reviewerCommentsCount\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment AtemptResult on StudentGoalAttempt {\n  finalPointProject\n  finalPercentageProject\n  resultModuleCompletion\n  resultDate\n  __typename\n}\n\nfragment AttemptTeamWithMembers on TeamWithMembers {\n  team {\n    id\n    name\n    __typename\n  }\n  members {\n    ...TeamMemberWithRole\n    __typename\n  }\n  __typename\n}\n\nfragment TeamMemberWithRole on TeamMember {\n  role\n  user {\n    ...ProjectTeamMember\n    __typename\n  }\n  __typename\n}\n\nfragment ProjectTeamMember on User {\n  id\n  avatarUrl\n  login\n  userExperience {\n    level {\n      id\n      range {\n        levelCode\n        __typename\n      }\n      __typename\n    }\n    cookiesCount\n    codeReviewPoints\n    __typename\n  }\n  __typename\n}\n\nfragment P2PEvaluation on P2PEvaluationInfo {\n  status\n  checklist {\n    ...Checklist\n    __typename\n  }\n  __typename\n}\n\nfragment Checklist on FilledChecklist {\n  id\n  checklistId\n  endTimeCheck\n  startTimeCheck\n  reviewer {\n    avatarUrl\n    login\n    businessAdminRoles {\n      id\n      school {\n        id\n        organizationType\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  reviewFeedback {\n    ...EvaluationFeedback\n    __typename\n  }\n  comment\n  receivedPoint\n  receivedPercentage\n  quickAction\n  checkType\n  video {\n    ...P2PReviewVideo\n    __typename\n  }\n  __typename\n}\n\nfragment EvaluationFeedback on ReviewFeedback {\n  id\n  comment\n  filledChecklist {\n    id\n    __typename\n  }\n  reviewFeedbackCategoryValues {\n    feedbackCategory\n    feedbackValue\n    id\n    __typename\n  }\n  __typename\n}\n\nfragment P2PReviewVideo on OnlineReviewVideo {\n  link\n  status\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				goalId: string
				studentId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				school21: School21
			}

			export type School21 = {
				getProjectAttemptEvaluationsInfo_V1: GetProjectAttemptEvaluationsInfoV1[]
				__typename: string
			}

			export type GetProjectAttemptEvaluationsInfoV1 = {
				studentAnswerId: null | string
				studentGoalAttemptId: string
				attemptStatus?: string
				attemptResult: AttemptResult | null
				team: null
				p2p: P2P[]
				auto: Auto
				codeReview: CodeReview
				__typename: string
			}

			export type AttemptResult = {
				finalPointProject: number
				finalPercentageProject: number
				resultModuleCompletion: string
				resultDate: Date
				__typename: string
			}

			export type Auto = {
				status: string
				receivedPercentage: number
				endTimeCheck: null
				resultInfo: null
				__typename: string
			}

			export type CodeReview = {
				averageMark: null | string
				studentCodeReviews: unknown[]
				__typename: string
			}

			export type P2P = {
				status: string
				checklist: Checklist | null
				__typename: string
			}

			export type Checklist = {
				id: string
				checklistId: string
				endTimeCheck: Date
				startTimeCheck: Date
				reviewer: Reviewer
				reviewFeedback: ReviewFeedback | null
				comment: string
				receivedPoint: number
				receivedPercentage: number
				quickAction: null
				checkType: string
				video: null
				__typename: string
			}

			export type ReviewFeedback = {
				id: string
				comment: string
				filledChecklist: FilledChecklist
				reviewFeedbackCategoryValues: ReviewFeedbackCategoryValue[]
				__typename: string
			}

			export type FilledChecklist = {
				id: string
				__typename: string
			}

			export type ReviewFeedbackCategoryValue = {
				feedbackCategory: string
				feedbackValue: string
				id: string
				__typename: string
			}

			export type Reviewer = {
				avatarUrl: string
				login: string
				businessAdminRoles: unknown[]
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetProjectGitlabStatus {
		export const request = createGqlQueryRequest(
			"query getProjectGitlabStatus($taskId: ID!) {\n  student {\n    getGitlabLinksWithStatus(taskId: $taskId) {\n      id\n      sshLink\n      httpsLink\n      readyToUse\n      restartsCounter\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				taskId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getGitlabLinksWithStatus: GetGitlabLinksWithStatus
				__typename: string
			}

			export type GetGitlabLinksWithStatus = {
				id: number
				sshLink: string
				httpsLink: string
				readyToUse: string
				restartsCounter: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace CalendarGetModule {
		export const request = createGqlQueryRequest(
			"query calendarGetModule($moduleId: ID!) {\n  student {\n    getModuleById(goalId: $moduleId) {\n      id\n      moduleTitle\n      subjectTitle\n      goalExecutionType\n      trajectory {\n        ...CalendarModuleTrajectory\n        __typename\n      }\n      currentTask {\n        id\n        task {\n          id\n          assignmentType\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CalendarModuleTrajectory on PersonalTrajectory {\n  id\n  levels {\n    id\n    goalElements {\n      id\n      points {\n        id\n        studentTask {\n          ...CalendarStudentTask\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment CalendarStudentTask on StudentTask {\n  id\n  taskId\n  task {\n    id\n    studentTaskAdditionalAttributes {\n      ...CalendarStudentTaskAdditionalAttributes\n      __typename\n    }\n    __typename\n  }\n  lastAnswer {\n    id\n    __typename\n  }\n  __typename\n}\n\nfragment CalendarStudentTaskAdditionalAttributes on StudentTaskAdditionalAttributes {\n  cookiesCount\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				moduleId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getModuleById: GetModuleByID
				__typename: string
			}

			export type GetModuleByID = {
				id: string
				moduleTitle: string
				subjectTitle: string
				goalExecutionType: string
				trajectory: Trajectory
				currentTask: CurrentTask
				__typename: string
			}

			export type CurrentTask = {
				id: string
				task: CurrentTaskTask
				__typename: string
			}

			export type CurrentTaskTask = {
				id: string
				assignmentType: string
				__typename: string
			}

			export type Trajectory = {
				id: string
				levels: Level[]
				__typename: string
			}

			export type Level = {
				id: string
				goalElements: GoalElement[]
				__typename: string
			}

			export type GoalElement = {
				id: string
				points: Point[]
				__typename: string
			}

			export type Point = {
				id: string
				studentTask: StudentTask
				__typename: string
			}

			export type StudentTask = {
				id: string
				taskId: string
				task: StudentTaskTask
				lastAnswer: LastAnswer
				__typename: string
			}

			export type LastAnswer = {
				id: string
				__typename: string
			}

			export type StudentTaskTask = {
				id: string
				studentTaskAdditionalAttributes: StudentTaskAdditionalAttributes
				__typename: string
			}

			export type StudentTaskAdditionalAttributes = {
				cookiesCount: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace CalendarGetNameLessStudentTimeslotsForReview {
		export const request = createGqlQueryRequest(
			"query calendarGetNameLessStudentTimeslotsForReview($from: DateTime!, $taskId: ID!, $to: DateTime!) {\n  student {\n    getNameLessStudentTimeslotsForReview(from: $from, taskId: $taskId, to: $to) {\n      checkDuration\n      projectReviewsInfo {\n        ...ProjectReviewsInfo\n        __typename\n      }\n      timeSlots {\n        ...CalendarNameLessTimeslot\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ProjectReviewsInfo on ProjectReviewsInfo {\n  reviewByStudentCount\n  relevantReviewByStudentsCount\n  reviewByInspectionStaffCount\n  relevantReviewByInspectionStaffCount\n  __typename\n}\n\nfragment CalendarNameLessTimeslot on CalendarNamelessTimeSlot {\n  start\n  end\n  validStartTimes\n  staffSlot\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				taskId: string
				from: Date
				to: Date
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getNameLessStudentTimeslotsForReview: GetNameLessStudentTimeslotsForReview
				__typename: string
			}

			export type GetNameLessStudentTimeslotsForReview = {
				checkDuration: number
				projectReviewsInfo: ProjectReviewsInfo
				timeSlots: TimeSlot[]
				__typename: string
			}

			export type ProjectReviewsInfo = {
				reviewByStudentCount: number
				relevantReviewByStudentsCount: number
				reviewByInspectionStaffCount: number
				relevantReviewByInspectionStaffCount: number
				__typename: string
			}

			export type TimeSlot = {
				start: Date
				end: Date
				validStartTimes: Date[]
				staffSlot: boolean
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace BonusesGetBadgesWithFakePublicProfile {
		export const request = createGqlQueryRequest(
			"query bonusesGetBadgesWithFakePublicProfile($userId: UUID) {\n  student {\n    getBadgesWithFakePublicProfile(userId: $userId) {\n      ...UserAchievements\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment UserAchievements on UserBadgeAward {\n  id\n  histories {\n    id\n    rewardDate\n    awardPoints\n    __typename\n  }\n  badge {\n    id\n    kind {\n      id\n      name\n      order\n      __typename\n    }\n    name\n    description\n    avatarUrl\n    bigAvatarUrl\n    __typename\n  }\n  award {\n    id\n    awardCondition {\n      id\n      description\n      __typename\n    }\n    awardBounties {\n      awardBountyId\n      description\n      cookies\n      coins\n      experienceValue\n      coalitionPoints\n      softSkillPowers {\n        softSkillId\n        power\n        softSkill {\n          id\n          name\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  points\n  isFake\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				userId: null | string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getBadgesWithFakePublicProfile: GetBadgesWithFakePublicProfile[]
				__typename: string
			}

			export type GetBadgesWithFakePublicProfile = {
				id: string
				histories: History[]
				badge: Badge
				award: Award
				points: number
				isFake: boolean
				__typename: string
			}

			export type Award = {
				id: string
				awardCondition: AwardCondition
				awardBounties: AwardBounty[]
				__typename: string
			}

			export type AwardBounty = {
				awardBountyId: string
				description: string
				cookies: number
				coins: number
				experienceValue: number
				coalitionPoints: number
				softSkillPowers: SoftSkillPower[]
				__typename: string
			}

			export type SoftSkillPower = {
				softSkillId: number
				power: number
				softSkill: SoftSkill
				__typename: string
			}

			export type SoftSkill = {
				id: string
				name: string
				__typename: string
			}

			export type AwardCondition = {
				id: number
				description: string
				__typename: string
			}

			export type Badge = {
				id: string
				kind: Kind
				name: string
				description: string
				avatarUrl: string
				bigAvatarUrl: string
				__typename: string
			}

			export type Kind = {
				id: number
				name: string
				order: number
				__typename: string
			}

			export type History = {
				id: string
				rewardDate: Date
				awardPoints: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetCampusCurrentUser {
		export const request = createGqlQueryRequest(
			"query getCampusCurrentUser {\n  user {\n    getCurrentUser {\n      id\n      login\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				user: User
			}

			export type User = {
				getCurrentUser: GetCurrentUser
				__typename: string
			}

			export type GetCurrentUser = {
				id: string
				login: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetCampusWorkstation {
		export const request = createGqlQueryRequest(
			"query getCampusWorkstation($login: String!) {\n  student {\n    getWorkstationByLogin(login: $login) {\n      id\n      classroomId\n      hostName\n      workstationRow\n      workstationNumber\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				login: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getWorkstationByLogin: null
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetCampusBuildings {
		export const request = createGqlQueryRequest(
			"query getCampusBuildings {\n  student {\n    getBuildings {\n      id\n      name\n      classrooms {\n        id\n        number\n        capacity\n        availableCapacity\n        floor\n        classroomPlan {\n          classroomPlanId\n          planMeta\n          __typename\n        }\n        specializations\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getBuildings: GetBuilding[]
				__typename: string
			}

			export type GetBuilding = {
				id: string
				name: string
				classrooms: Classroom[]
				__typename: string
			}

			export type Classroom = {
				id: string
				number: string
				capacity: number
				availableCapacity: number
				floor: number
				classroomPlan: ClassroomPlan
				specializations: string[]
				__typename: string
			}

			export type ClassroomPlan = {
				classroomPlanId: string
				planMeta: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetCampusPlanOccupied {
		export const request = createGqlQueryRequest(
			"query getCampusPlanOccupied($clusterId: ID!) {\n  student {\n    getClusterPlanStudentsByClusterId(clusterId: $clusterId) {\n      occupiedPlaces {\n        row\n        number\n        stageGroupName\n        stageName\n        user {\n          id\n          login\n          avatarUrl\n          __typename\n        }\n        experience {\n          id\n          value\n          level {\n            id\n            range {\n              id\n              levelCode\n              leftBorder\n              rightBorder\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        studentType\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				clusterId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getClusterPlanStudentsByClusterId: GetClusterPlanStudentsByClusterID
				__typename: string
			}

			export type GetClusterPlanStudentsByClusterID = {
				occupiedPlaces: OccupiedPlace[]
				__typename: string
			}

			export type OccupiedPlace = {
				row: string
				number: number
				stageGroupName: string
				stageName: string
				user: User
				experience: Experience
				studentType: string
				__typename: string
			}

			export type Experience = {
				id: string
				value: number
				level: Level
				__typename: string
			}

			export type Level = {
				id: number
				range: Range
				__typename: string
			}

			export type Range = {
				id: string
				levelCode: number
				leftBorder: number
				rightBorder: number
				__typename: string
			}

			export type User = {
				id: string
				login: string
				avatarUrl: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace CalendarAddEvent {
		export const request = createGqlQueryRequest(
			"mutation calendarAddEvent($start: DateTime!, $end: DateTime!) {\n  student {\n    addEventToTimetable(start: $start, end: $end) {\n      ...CalendarEvent\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CalendarEvent on CalendarEvent {\n  id\n  start\n  end\n  description\n  eventType\n  eventCode\n  eventSlots {\n    id\n    type\n    start\n    end\n    __typename\n  }\n  bookings {\n    ...CalendarReviewBooking\n    __typename\n  }\n  exam {\n    ...CalendarEventExam\n    __typename\n  }\n  studentCodeReview {\n    studentGoalId\n    __typename\n  }\n  activity {\n    ...CalendarEventActivity\n    studentFeedback {\n      id\n      rating\n      comment\n      __typename\n    }\n    status\n    activityType\n    isMandatory\n    isWaitListActive\n    isVisible\n    comments {\n      type\n      createTs\n      comment\n      __typename\n    }\n    organizers {\n      id\n      login\n      __typename\n    }\n    __typename\n  }\n  goals {\n    goalId\n    goalName\n    __typename\n  }\n  penalty {\n    ...Penalty\n    __typename\n  }\n  __typename\n}\n\nfragment CalendarReviewBooking on CalendarBooking {\n  id\n  answerId\n  eventSlotId\n  task {\n    id\n    goalId\n    goalName\n    studentTaskAdditionalAttributes {\n      cookiesCount\n      __typename\n    }\n    assignmentType\n    __typename\n  }\n  eventSlot {\n    id\n    start\n    end\n    event {\n      eventUserRole\n      __typename\n    }\n    __typename\n  }\n  verifierUser {\n    ...CalendarReviewUser\n    __typename\n  }\n  verifiableStudent {\n    id\n    user {\n      ...CalendarReviewUser\n      __typename\n    }\n    __typename\n  }\n  bookingStatus\n  team {\n    ...ProjectTeamMembers\n    __typename\n  }\n  isOnline\n  vcLinkUrl\n  __typename\n}\n\nfragment CalendarReviewUser on User {\n  id\n  login\n  __typename\n}\n\nfragment ProjectTeamMembers on ProjectTeamMembers {\n  id\n  teamLead {\n    ...ProjectTeamMember\n    __typename\n  }\n  members {\n    ...ProjectTeamMember\n    __typename\n  }\n  invitedUsers {\n    ...ProjectTeamMember\n    __typename\n  }\n  teamName\n  teamStatus\n  minTeamMemberCount\n  maxTeamMemberCount\n  __typename\n}\n\nfragment ProjectTeamMember on User {\n  id\n  avatarUrl\n  login\n  userExperience {\n    level {\n      id\n      range {\n        levelCode\n        __typename\n      }\n      __typename\n    }\n    cookiesCount\n    codeReviewPoints\n    __typename\n  }\n  __typename\n}\n\nfragment CalendarEventExam on Exam {\n  examId\n  eventId\n  beginDate\n  endDate\n  name\n  location\n  currentStudentsCount\n  maxStudentCount\n  updateDate\n  goalId\n  goalName\n  isWaitListActive\n  isInWaitList\n  stopRegisterDate\n  __typename\n}\n\nfragment CalendarEventActivity on ActivityEvent {\n  activityEventId\n  eventId\n  name\n  beginDate\n  endDate\n  isRegistered\n  description\n  currentStudentsCount\n  maxStudentCount\n  location\n  updateDate\n  isWaitListActive\n  isInWaitList\n  stopRegisterDate\n  __typename\n}\n\nfragment Penalty on Penalty {\n  comment\n  id\n  duration\n  status\n  startTime\n  createTime\n  penaltySlot {\n    currentStudentsCount\n    description\n    duration\n    startTime\n    id\n    endTime\n    __typename\n  }\n  reasonId\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				start: Date
				end: Date
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				addEventToTimetable: AddEventToTimetable[]
				__typename: string
			}

			export type AddEventToTimetable = {
				id: string
				start: Date
				end: Date
				description: string
				eventType: string
				eventCode: null
				eventSlots: EventSlot[]
				bookings: unknown[]
				exam: null
				studentCodeReview: null
				activity: null
				goals: unknown[]
				penalty: null
				__typename: string
			}

			export type EventSlot = {
				id: string
				type: string
				start: Date
				end: Date
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetActivityTypes {
		export const request = createGqlQueryRequest(
			"query getActivityTypes {\n  school21 {\n    getActivityTypes {\n      id\n      description\n      category\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				school21: School21
			}

			export type School21 = {
				getActivityTypes: GetActivityType[]
				__typename: string
			}

			export type GetActivityType = {
				id: string
				description: string
				category: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetStageInfo {
		export const request = createGqlQueryRequest(
			"query getStageInfo {\n  user {\n    getCurrentUser {\n      id\n      studentRoles {\n        status\n        school {\n          organizationType\n          __typename\n        }\n        stageGroup {\n          classSubjects {\n            stage {\n              name\n              __typename\n            }\n            __typename\n          }\n          name\n          stage\n          isActive\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    getAllStagesTenantAware {\n      id\n      name\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				user: User
			}

			export type User = {
				getCurrentUser: GetCurrentUser
				getAllStagesTenantAware: GetAllStagesTenantAware[]
				__typename: string
			}

			export type GetAllStagesTenantAware = {
				id: string
				name: string
				__typename: string
			}

			export type GetCurrentUser = {
				id: string
				studentRoles: StudentRole[]
				__typename: string
			}

			export type StudentRole = {
				status: string
				school: School
				stageGroup: StageGroup
				__typename: string
			}

			export type School = {
				organizationType: string
				__typename: string
			}

			export type StageGroup = {
				classSubjects: ClassSubject[]
				name: string
				stage: number
				isActive: boolean
				__typename: string
			}

			export type ClassSubject = {
				stage: Stage
				__typename: string
			}

			export type Stage = {
				name: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetUsers {
		export const request = createGqlQueryRequest(
			"query getUsers($userIds: [UUID!]!) {\n  school21 {\n    getUsers(userIds: $userIds) {\n      userId\n      login\n      firstName\n      middleName\n      lastName\n      avatarUrl\n      level\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				userIds: string[]
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				school21: School21
			}

			export type School21 = {
				getUsers: GetUser[]
				__typename: string
			}

			export type GetUser = {
				userId: string
				login: string
				firstName: string
				middleName: null
				lastName: string
				avatarUrl: string
				level: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetMySuggestedActivities {
		export const request = createGqlQueryRequest(
			"query getMySuggestedActivities($page: PagingInput!, $statuses: [ParticipantEventStatus]) {\n  school21 {\n    getMySuggestedActivities(page: $page, statuses: $statuses) {\n      id\n      start\n      end\n      eventType\n      description\n      eventCode\n      activity {\n        organizers {\n          id\n          login\n          __typename\n        }\n        eventCreator {\n          id\n          login\n          __typename\n        }\n        comments {\n          type\n          createTs\n          comment\n          __typename\n        }\n        averageFeedbackRating\n        isVisible\n        activityType\n        status\n        activityEventId\n        eventId\n        name\n        description\n        location\n        currentStudentsCount\n        maxStudentCount\n        isRegistered\n        isInWaitList\n        isWaitListActive\n        stopRegisterDate\n        beginDate\n        endDate\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				page: Page
			}

			export type Page = {
				offset: number
				limit: number
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				school21: School21
			}

			export type School21 = {
				getMySuggestedActivities: unknown[]
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace SubscribeToEvent {
		export const request = createGqlQueryRequest(
			"mutation subscribeToEvent($eventId: ID!) {\n  student {\n    subscribeToEvent(eventId: $eventId) {\n      ...UpcomingEvent\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment UpcomingEvent on CalendarEvent {\n  id\n  start\n  end\n  bookings {\n    id\n    task {\n      id\n      goalName\n      __typename\n    }\n    __typename\n  }\n  eventSlots {\n    id\n    eventId\n    type\n    start\n    end\n    __typename\n  }\n  maxStudentCount\n  location\n  ipRange\n  eventType\n  eventCode\n  description\n  externalId\n  currentStudentsCount\n  exam {\n    examId\n    eventId\n    beginDate\n    endDate\n    location\n    ip\n    maxStudentCount\n    isVisible\n    name\n    goalId\n    isWaitListActive\n    isInWaitList\n    currentStudentsCount\n    createDate\n    updateDate\n    schoolId\n    stopRegisterDate\n    isRegistered\n    goalName\n    eventType\n    registrationAccessStatus\n    __typename\n  }\n  studentCodeReview {\n    studentGoalId\n    __typename\n  }\n  activity {\n    activityEventId\n    eventId\n    beginDate\n    endDate\n    location\n    description\n    maxStudentCount\n    isVisible\n    name\n    isWaitListActive\n    isInWaitList\n    currentStudentsCount\n    createDate\n    updateDate\n    schoolId\n    stopRegisterDate\n    isRegistered\n    activityType\n    eventType\n    isMandatory\n    status\n    organizers {\n      id\n      login\n      __typename\n    }\n    __typename\n  }\n  penalty {\n    ...Penalty\n    __typename\n  }\n  __typename\n}\n\nfragment Penalty on Penalty {\n  comment\n  id\n  duration\n  status\n  startTime\n  createTime\n  penaltySlot {\n    currentStudentsCount\n    description\n    duration\n    startTime\n    id\n    endTime\n    __typename\n  }\n  reasonId\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				eventId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				subscribeToEvent: SubscribeToEvent
				__typename: string
			}

			export type SubscribeToEvent = {
				id: string
				start: Date
				end: Date
				bookings: unknown[]
				eventSlots: unknown[]
				maxStudentCount: number
				location: string
				ipRange: string
				eventType: string
				eventCode: string
				description: string
				externalId: number
				currentStudentsCount: number
				exam: null
				studentCodeReview: null
				activity: Activity
				penalty: null
				__typename: string
			}

			export type Activity = {
				activityEventId: string
				eventId: string
				beginDate: Date
				endDate: Date
				location: string
				description: string
				maxStudentCount: number
				isVisible: boolean
				name: string
				isWaitListActive: boolean
				isInWaitList: boolean
				currentStudentsCount: number
				createDate: Date
				updateDate: Date
				schoolId: string
				stopRegisterDate: Date
				isRegistered: boolean
				activityType: string
				eventType: string
				isMandatory: boolean
				status: string
				organizers: Organizer[]
				__typename: string
			}

			export type Organizer = {
				id: string
				login: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace UnsubscribeFromEvent {
		export const request = createGqlQueryRequest(
			"mutation unsubscribeFromEvent($eventId: ID!) {\n  student {\n    unsubscribeFromEvent(eventId: $eventId) {\n      ...UpcomingEvent\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment UpcomingEvent on CalendarEvent {\n  id\n  start\n  end\n  bookings {\n    id\n    task {\n      id\n      goalName\n      __typename\n    }\n    __typename\n  }\n  eventSlots {\n    id\n    eventId\n    type\n    start\n    end\n    __typename\n  }\n  maxStudentCount\n  location\n  ipRange\n  eventType\n  eventCode\n  description\n  externalId\n  currentStudentsCount\n  exam {\n    examId\n    eventId\n    beginDate\n    endDate\n    location\n    ip\n    maxStudentCount\n    isVisible\n    name\n    goalId\n    isWaitListActive\n    isInWaitList\n    currentStudentsCount\n    createDate\n    updateDate\n    schoolId\n    stopRegisterDate\n    isRegistered\n    goalName\n    eventType\n    registrationAccessStatus\n    __typename\n  }\n  studentCodeReview {\n    studentGoalId\n    __typename\n  }\n  activity {\n    activityEventId\n    eventId\n    beginDate\n    endDate\n    location\n    description\n    maxStudentCount\n    isVisible\n    name\n    isWaitListActive\n    isInWaitList\n    currentStudentsCount\n    createDate\n    updateDate\n    schoolId\n    stopRegisterDate\n    isRegistered\n    activityType\n    eventType\n    isMandatory\n    status\n    organizers {\n      id\n      login\n      __typename\n    }\n    __typename\n  }\n  penalty {\n    ...Penalty\n    __typename\n  }\n  __typename\n}\n\nfragment Penalty on Penalty {\n  comment\n  id\n  duration\n  status\n  startTime\n  createTime\n  penaltySlot {\n    currentStudentsCount\n    description\n    duration\n    startTime\n    id\n    endTime\n    __typename\n  }\n  reasonId\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				eventId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				unsubscribeFromEvent: UnsubscribeFromEvent
				__typename: string
			}

			export type UnsubscribeFromEvent = {
				id: string
				start: Date
				end: Date
				bookings: unknown[]
				eventSlots: unknown[]
				maxStudentCount: number
				location: string
				ipRange: string
				eventType: string
				eventCode: string
				description: string
				externalId: number
				currentStudentsCount: number
				exam: null
				studentCodeReview: null
				activity: Activity
				penalty: null
				__typename: string
			}

			export type Activity = {
				activityEventId: string
				eventId: string
				beginDate: Date
				endDate: Date
				location: string
				description: string
				maxStudentCount: number
				isVisible: boolean
				name: string
				isWaitListActive: boolean
				isInWaitList: boolean
				currentStudentsCount: number
				createDate: Date
				updateDate: Date
				schoolId: string
				stopRegisterDate: Date
				isRegistered: boolean
				activityType: string
				eventType: string
				isMandatory: boolean
				status: string
				organizers: Organizer[]
				__typename: string
			}

			export type Organizer = {
				id: string
				login: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace PublicProfileGetProjects {
		export const request = createGqlQueryRequest(
			"query publicProfileGetProjects($studentId: UUID!, $stageGroupId: ID!) {\n  school21 {\n    getStudentProjectsForPublicProfileByStageGroup(\n      studentId: $studentId\n      stageGroupId: $stageGroupId\n    ) {\n      groupName\n      name\n      experience\n      finalPercentage\n      goalId\n      goalStatus\n      amountAnswers\n      amountReviewedAnswers\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				studentId: string
				stageGroupId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				school21: School21
			}

			export type School21 = {
				getStudentProjectsForPublicProfileByStageGroup: GetStudentProjectsForPublicProfileByStageGroup[]
				__typename: string
			}

			export type GetStudentProjectsForPublicProfileByStageGroup = {
				groupName: string
				name: string
				experience: number
				finalPercentage: number | null
				goalId: number
				goalStatus: string
				amountAnswers: null
				amountReviewedAnswers: null
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace PublicProfileGetCredentialsByLogin {
		export const request = createGqlQueryRequest(
			"query publicProfileGetCredentialsByLogin($login: String!) {\n  school21 {\n    getStudentByLogin(login: $login) {\n      studentId\n      userId\n      schoolId\n      isActive\n      isGraduate\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				login: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				school21: School21
			}

			export type School21 = {
				getStudentByLogin: GetStudentByLogin
				__typename: string
			}

			export type GetStudentByLogin = {
				studentId: string
				userId: string
				schoolId: string
				isActive: boolean
				isGraduate: boolean
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace BonusesGetUserIdByLogin {
		export const request = createGqlQueryRequest(
			"query bonusesGetUserIdByLogin($login: String!) {\n  student {\n    getUserIdByLogin(login: $login)\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				login: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getUserIdByLogin: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace CompetitionCoalitionGetUserTournament {
		export const request = createGqlQueryRequest(
			"query competitionCoalitionGetUserTournament {\n  student {\n    getUserTournamentWidget {\n      coalitionMember {\n        coalition {\n          ...CompetitionCurrentCoalition\n          __typename\n        }\n        __typename\n      }\n      lastTournamentResult {\n        id\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CompetitionCurrentCoalition on GameCoalition {\n  id\n  name\n  avatarUrl\n  backgroundUrl\n  backgroundUrlBig\n  memberCount\n  color\n  currentTournament {\n    points\n    tournament {\n      name\n      timeStart\n      timeEnd\n      __typename\n    }\n    __typename\n  }\n  masterUser {\n    login\n    avatarUrl\n    __typename\n  }\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getUserTournamentWidget: GetUserTournamentWidget
				__typename: string
			}

			export type GetUserTournamentWidget = {
				coalitionMember: CoalitionMember
				lastTournamentResult: LastTournamentResult
				__typename: string
			}

			export type CoalitionMember = {
				coalition: Coalition
				__typename: string
			}

			export type Coalition = {
				id: string
				name: string
				avatarUrl: string
				backgroundUrl: string
				backgroundUrlBig: string
				memberCount: number
				color: string
				currentTournament: CurrentTournament
				masterUser: MasterUser
				__typename: string
			}

			export type CurrentTournament = {
				points: number
				tournament: Tournament
				__typename: string
			}

			export type Tournament = {
				name: string
				timeStart: Date
				timeEnd: Date
				__typename: string
			}

			export type MasterUser = {
				login: string
				avatarUrl: string
				__typename: string
			}

			export type LastTournamentResult = {
				id: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace CompetitionCoalitionGetMyCoalitionMembers {
		export const request = createGqlQueryRequest(
			"query competitionCoalitionGetMyCoalitionMembers($page: PagingInput) {\n  student {\n    getUserTournamentWidget {\n      getMyCoalitionMembers(page: $page) {\n        user {\n          id\n          login\n          avatarUrl\n          userExperience {\n            level {\n              id\n              levelCode\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				page: Page
			}

			export type Page = {
				offset: number
				limit: number
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getUserTournamentWidget: GetUserTournamentWidget
				__typename: string
			}

			export type GetUserTournamentWidget = {
				getMyCoalitionMembers: GetMyCoalitionMember[]
				__typename: string
			}

			export type GetMyCoalitionMember = {
				user: User
				__typename: string
			}

			export type User = {
				id: string
				login: string
				avatarUrl: string
				userExperience: UserExperience
				__typename: string
			}

			export type UserExperience = {
				level: Level
				__typename: string
			}

			export type Level = {
				id: number
				levelCode: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetPenaltyList {
		export const request = createGqlQueryRequest(
			"query getPenaltyList($statuses: [String]!, $from: DateTime, $to: DateTime, $sorting: SortingField, $page: PagingInput!) {\n  school21 {\n    getMyPenalties(\n      statuses: $statuses\n      from: $from\n      to: $to\n      sorting: $sorting\n      page: $page\n    ) {\n      ...Penalty\n      __typename\n    }\n    getPenaltyReasons {\n      id\n      name\n      __typename\n    }\n    countMyPenalties(statuses: $statuses)\n    __typename\n  }\n}\n\nfragment Penalty on Penalty {\n  comment\n  id\n  duration\n  status\n  startTime\n  createTime\n  penaltySlot {\n    currentStudentsCount\n    description\n    duration\n    startTime\n    id\n    endTime\n    __typename\n  }\n  reasonId\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				page: Page
				statuses: string[]
			}

			export type Page = {
				offset: number
				limit: number
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				school21: School21
			}

			export type School21 = {
				getMyPenalties: unknown[]
				getPenaltyReasons: GetPenaltyReason[]
				countMyPenalties: number
				__typename: string
			}

			export type GetPenaltyReason = {
				id: string
				name: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetPenaltiesCount {
		export const request = createGqlQueryRequest(
			"query getPenaltiesCount($statuses: [String]!) {\n  school21 {\n    countMyPenalties(statuses: $statuses)\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				statuses: string[]
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				school21: School21
			}

			export type School21 = {
				countMyPenalties: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetGraphCurrentType {
		export const request = createGqlQueryRequest(
			"query getGraphCurrentType($userId: ID!, $schoolId: ID!) {\n  student {\n    getStudentCurrentStageWithGraphType(userId: $userId, schoolId: $schoolId) {\n      id\n      graphType\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				userId: string
				schoolId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getStudentCurrentStageWithGraphType: GetStudentCurrentStageWithGraphType
				__typename: string
			}

			export type GetStudentCurrentStageWithGraphType = {
				id: string
				graphType: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetGraphBasisGoals {
		export const request = createGqlQueryRequest(
			"query getGraphBasisGoals($studentId: UUID!) {\n  student {\n    getBasisGraph(studentId: $studentId) {\n      isIntensiveGraphAvailable\n      graphNodes {\n        ...BasisGraphNode\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment BasisGraphNode on GraphNode {\n  graphNodeId\n  nodeCode\n  studyDirections {\n    id\n    name\n    color\n    textColor\n    __typename\n  }\n  entityType\n  entityId\n  goal {\n    goalExecutionType\n    projectState\n    projectName\n    projectDescription\n    projectPoints\n    projectDate\n    duration\n    isMandatory\n    __typename\n  }\n  course {\n    courseType\n    projectState\n    projectName\n    projectDescription\n    projectPoints\n    projectDate\n    duration\n    localCourseId\n    __typename\n  }\n  parentNodeCodes\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				studentId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getBasisGraph: GetBasisGraph
				__typename: string
			}

			export type GetBasisGraph = {
				isIntensiveGraphAvailable: boolean
				graphNodes: GraphNode[]
				__typename: string
			}

			export type GraphNode = {
				graphNodeId: string
				nodeCode: string
				studyDirections: StudyDirection[]
				entityType: string
				entityId: string
				goal: Course | null
				course: Course | null
				parentNodeCodes: string[]
				__typename: string
			}

			export type Course = {
				courseType?: string
				projectState: string
				projectName: string
				projectDescription: string
				projectPoints: number
				projectDate: null
				duration: number
				localCourseId?: number
				__typename: string
				goalExecutionType?: string
				isMandatory?: boolean
			}

			export type StudyDirection = {
				id: string
				name: string
				color: string
				textColor: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetTasks {
		export const request = createGqlQueryRequest(
			"query getTasks($ids: [ID!]!) {\n  student {\n    getTasksByIds(ids: $ids) {\n      ...StudentTaskInProject\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment StudentTaskInProject on StudentTask {\n  id\n  task {\n    id\n    content {\n      id\n      body\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				ids: string[]
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getTasksByIds: GetTasksByID[]
				__typename: string
			}

			export type GetTasksByID = {
				id: string
				task: Task
				__typename: string
			}

			export type Task = {
				id: string
				content: Content
				__typename: string
			}

			export type Content = {
				id: string
				body: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetGitlabLink {
		export const request = createGqlQueryRequest(
			"query getGitlabLink($taskId: ID!) {\n  student {\n    getLinkToPrivateStudentGitlabProjectByTaskId(taskId: $taskId) {\n      sshLink\n      hasOpenedMR\n      httpsLink\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				taskId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getLinkToPrivateStudentGitlabProjectByTaskId: GetLinkToPrivateStudentGitlabProjectByTaskID
				__typename: string
			}

			export type GetLinkToPrivateStudentGitlabProjectByTaskID = {
				sshLink: string
				hasOpenedMR: boolean
				httpsLink: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace CreateFeedbackOnEvaluation {
		export const request = createGqlQueryRequest(
			"mutation createFeedbackOnEvaluation($reviewFeedbackInput: ReviewFeedbackInput!) {\n  student {\n    createReviewFeedback(reviewFeedbackInput: $reviewFeedbackInput) {\n      ...EvaluationFeedback\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment EvaluationFeedback on ReviewFeedback {\n  id\n  comment\n  filledChecklist {\n    id\n    __typename\n  }\n  reviewFeedbackCategoryValues {\n    feedbackCategory\n    feedbackValue\n    id\n    __typename\n  }\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				reviewFeedbackInput: ReviewFeedbackInput
			}

			export type ReviewFeedbackInput = {
				filledChecklistId: string
				comment: string
				reviewFeedbackCategoryValues: ReviewFeedbackCategoryValue[]
			}

			export type ReviewFeedbackCategoryValue = {
				feedbackCategory: string
				feedbackCategoryValue: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				createReviewFeedback: CreateReviewFeedback
				__typename: string
			}

			export type CreateReviewFeedback = {
				id: string
				comment: string
				filledChecklist: FilledChecklist
				reviewFeedbackCategoryValues: ReviewFeedbackCategoryValue[]
				__typename: string
			}

			export type FilledChecklist = {
				id: string
				__typename: string
			}

			export type ReviewFeedbackCategoryValue = {
				feedbackCategory: string
				feedbackValue: string
				id: string
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetProjectTeamWithMembers {
		export const request = createGqlQueryRequest(
			"query getProjectTeamWithMembers($goalId: ID!) {\n  student {\n    getProjectTeamWithMembers(goalId: $goalId) {\n      ...TeamWithMembers\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment TeamWithMembers on ProjectTeamWithMembers {\n  teamWithMembers {\n    team {\n      id\n      name\n      status\n      minTeamMemberCount\n      maxTeamMemberCount\n      __typename\n    }\n    members {\n      ...TeamMemberWithRole\n      __typename\n    }\n    __typename\n  }\n  invitedStudents {\n    student {\n      user {\n        ...ProjectTeamMember\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment TeamMemberWithRole on TeamMember {\n  role\n  user {\n    ...ProjectTeamMember\n    __typename\n  }\n  __typename\n}\n\nfragment ProjectTeamMember on User {\n  id\n  avatarUrl\n  login\n  userExperience {\n    level {\n      id\n      range {\n        levelCode\n        __typename\n      }\n      __typename\n    }\n    cookiesCount\n    codeReviewPoints\n    __typename\n  }\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				goalId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: DataStudent
			}

			export type DataStudent = {
				getProjectTeamWithMembers: GetProjectTeamWithMembers
				__typename: string
			}

			export type GetProjectTeamWithMembers = {
				teamWithMembers: TeamWithMembers
				invitedStudents: InvitedStudent[]
				__typename: string
			}

			export type InvitedStudent = {
				student: InvitedStudentStudent
				__typename: string
			}

			export type InvitedStudentStudent = {
				user: User
				__typename: string
			}

			export type User = {
				id: string
				avatarUrl: string
				login: string
				userExperience: UserExperience
				__typename: string
			}

			export type UserExperience = {
				level: Level
				cookiesCount: number
				codeReviewPoints: number
				__typename: string
			}

			export type Level = {
				id: number
				range: Range
				__typename: string
			}

			export type Range = {
				levelCode: number
				__typename: string
			}

			export type TeamWithMembers = {
				team: Team
				members: Member[]
				__typename: string
			}

			export type Member = {
				role: string
				user: User
				__typename: string
			}

			export type Team = {
				id: string
				name: string
				status: string
				minTeamMemberCount: number
				maxTeamMemberCount: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetIsDisbandRequestAlreadySent {
		export const request = createGqlQueryRequest(
			"query getIsDisbandRequestAlreadySent($teamId: UUID!) {\n  student {\n    isRequestBeenSentToTeamDisband(teamId: $teamId)\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				teamId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				isRequestBeenSentToTeamDisband: boolean
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetGitlabSettingsToken {
		export const request = createGqlQueryRequest(
			"query getGitlabSettingsToken($taskId: ID!) {\n  student {\n    getLinkToPrivateStudentGitlabProjectByTaskId(taskId: $taskId) {\n      runnersToken\n      __typename\n    }\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				taskId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: null
			}
		}

		export type Data = Data.Data
	}

	export namespace CancelInvitation {
		export const request = createGqlQueryRequest(
			"mutation cancelInvitation($teamId: UUID!, $userId: ID!) {\n  student {\n    cancelInvitation(teamId: $teamId, userId: $userId) {\n      ...StudentInvitationInfo\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment StudentInvitationInfo on StudentInvitationInfo {\n  student {\n    ...AvailableStudentForTeam\n    __typename\n  }\n  invitationStatus\n  __typename\n}\n\nfragment AvailableStudentForTeam on Student {\n  id\n  user {\n    id\n    login\n    avatarUrl\n    userExperience {\n      ...CurrentUserExperience\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment CurrentUserExperience on UserExperience {\n  id\n  cookiesCount\n  codeReviewPoints\n  coinsCount\n  level {\n    id\n    range {\n      id\n      levelCode\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				userId: string
				teamId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: DataStudent
			}

			export type DataStudent = {
				cancelInvitation: CancelInvitation
				__typename: string
			}

			export type CancelInvitation = {
				student: CancelInvitationStudent
				invitationStatus: string
				__typename: string
			}

			export type CancelInvitationStudent = {
				id: string
				user: User
				__typename: string
			}

			export type User = {
				id: string
				login: string
				avatarUrl: string
				userExperience: UserExperience
				__typename: string
			}

			export type UserExperience = {
				id: string
				cookiesCount: number
				codeReviewPoints: number
				coinsCount: number
				level: Level
				__typename: string
			}

			export type Level = {
				id: number
				range: Range
				__typename: string
			}

			export type Range = {
				id: string
				levelCode: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace GetAvailableStudentsForTeams {
		export const request = createGqlQueryRequest(
			"query getAvailableStudentsForTeams($goalId: ID!) {\n  student {\n    getAvailableStudentsForTeam(goalId: $goalId) {\n      ...StudentInvitationInfo\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment StudentInvitationInfo on StudentInvitationInfo {\n  student {\n    ...AvailableStudentForTeam\n    __typename\n  }\n  invitationStatus\n  __typename\n}\n\nfragment AvailableStudentForTeam on Student {\n  id\n  user {\n    id\n    login\n    avatarUrl\n    userExperience {\n      ...CurrentUserExperience\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment CurrentUserExperience on UserExperience {\n  id\n  cookiesCount\n  codeReviewPoints\n  coinsCount\n  level {\n    id\n    range {\n      id\n      levelCode\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				goalId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: DataStudent
			}

			export type DataStudent = {
				getAvailableStudentsForTeam: GetAvailableStudentsForTeam[]
				__typename: string
			}

			export type GetAvailableStudentsForTeam = {
				student: GetAvailableStudentsForTeamStudent
				invitationStatus: string
				__typename: string
			}

			export type GetAvailableStudentsForTeamStudent = {
				id: string
				user: User
				__typename: string
			}

			export type User = {
				id: string
				login: string
				avatarUrl: string
				userExperience: UserExperience
				__typename: string
			}

			export type UserExperience = {
				id: string
				cookiesCount: number
				codeReviewPoints: number
				coinsCount: number
				level: Level
				__typename: string
			}

			export type Level = {
				id: number
				range: Range
				__typename: string
			}

			export type Range = {
				id: string
				levelCode: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace SendInvitation {
		export const request = createGqlQueryRequest(
			"mutation sendInvitation($teamId: UUID!, $userId: ID!) {\n  student {\n    sendInvitation(teamId: $teamId, userId: $userId) {\n      ...StudentInvitationInfo\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment StudentInvitationInfo on StudentInvitationInfo {\n  student {\n    ...AvailableStudentForTeam\n    __typename\n  }\n  invitationStatus\n  __typename\n}\n\nfragment AvailableStudentForTeam on Student {\n  id\n  user {\n    id\n    login\n    avatarUrl\n    userExperience {\n      ...CurrentUserExperience\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment CurrentUserExperience on UserExperience {\n  id\n  cookiesCount\n  codeReviewPoints\n  coinsCount\n  level {\n    id\n    range {\n      id\n      levelCode\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				userId: string
				teamId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: DataStudent
			}

			export type DataStudent = {
				sendInvitation: SendInvitation
				__typename: string
			}

			export type SendInvitation = {
				student: SendInvitationStudent
				invitationStatus: string
				__typename: string
			}

			export type SendInvitationStudent = {
				id: string
				user: User
				__typename: string
			}

			export type User = {
				id: string
				login: string
				avatarUrl: string
				userExperience: UserExperience
				__typename: string
			}

			export type UserExperience = {
				id: string
				cookiesCount: number
				codeReviewPoints: number
				coinsCount: number
				level: Level
				__typename: string
			}

			export type Level = {
				id: number
				range: Range
				__typename: string
			}

			export type Range = {
				id: string
				levelCode: number
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace RemoveP2P {
		export const request = createGqlQueryRequest(
			"mutation removeP2P($bookingId: ID!) {\n  student {\n    removeBookingFromEventSlot(bookingId: $bookingId)\n    __typename\n  }\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				bookingId: string
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				removeBookingFromEventSlot: boolean
				__typename: string
			}
		}

		export type Data = Data.Data
	}

	export namespace CalendarGetExams {
		export const request = createGqlQueryRequest(
			"query calendarGetExams($from: DateTime!, $to: DateTime!) {\n  student {\n    getExams(from: $from, to: $to) {\n      ...CalendarExam\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CalendarExam on Exam {\n  examId\n  eventId\n  beginDate\n  endDate\n  name\n  location\n  maxStudentCount\n  currentStudentsCount\n  updateDate\n  goalId\n  goalName\n  isWaitListActive\n  isInWaitList\n  stopRegisterDate\n  __typename\n}\n",
		)

		export namespace Variables {
			export type Variables = {
				from: Date
				to: Date
			}
		}

		export type Variables = Variables.Variables

		export namespace Data {
			export type Data = {
				student: Student
			}

			export type Student = {
				getExams: unknown[]
				__typename: string
			}
		}

		export type Data = Data.Data
	}
}

export class ApiContext {
	constructor(readonly client: Client) {}

	async getUserRestrictionsInfo(
		...[variables]: ElideVariables<Api.GetUserRestrictionsInfo.Variables>
	) {
		return this.client.request<Api.GetUserRestrictionsInfo.Data>({
			...Api.GetUserRestrictionsInfo.request,
			variables: useDefaultVariables(variables),
		})
	}

	async userRoleLoaderGetRoles(
		...[variables]: ElideVariables<Api.UserRoleLoaderGetRoles.Variables>
	) {
		return this.client.request<Api.UserRoleLoaderGetRoles.Data>({
			...Api.UserRoleLoaderGetRoles.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getUserFeatureFlags(
		...[variables]: ElideVariables<Api.GetUserFeatureFlags.Variables>
	) {
		return this.client.request<Api.GetUserFeatureFlags.Data>({
			...Api.GetUserFeatureFlags.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getStudentIsDeadlinesEnabled(
		...[variables]: ElideVariables<Api.GetStudentIsDeadlinesEnabled.Variables>
	) {
		return this.client.request<Api.GetStudentIsDeadlinesEnabled.Data>({
			...Api.GetStudentIsDeadlinesEnabled.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getTournamentNotificationResults(
		...[
			variables,
		]: ElideVariables<Api.GetTournamentNotificationResults.Variables>
	) {
		return this.client.request<Api.GetTournamentNotificationResults.Data>({
			...Api.GetTournamentNotificationResults.request,
			variables: useDefaultVariables(variables),
		})
	}

	async deadlinesGetStudentData(
		...[variables]: ElideVariables<Api.DeadlinesGetStudentData.Variables>
	) {
		return this.client.request<Api.DeadlinesGetStudentData.Data>({
			...Api.DeadlinesGetStudentData.request,
			variables: useDefaultVariables(variables),
		})
	}

	async deadlineReminderGetClosestDeadlinePopup(
		...[
			variables,
		]: ElideVariables<Api.DeadlineReminderGetClosestDeadlinePopup.Variables>
	) {
		return this.client.request<Api.DeadlineReminderGetClosestDeadlinePopup.Data>(
			{
				...Api.DeadlineReminderGetClosestDeadlinePopup.request,
				variables: useDefaultVariables(variables),
			},
		)
	}

	async eventsWithoutFeedback(
		...[variables]: ElideVariables<Api.EventsWithoutFeedback.Variables>
	) {
		return this.client.request<Api.EventsWithoutFeedback.Data>({
			...Api.EventsWithoutFeedback.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getIsHonorRatingNeeded(
		...[variables]: ElideVariables<Api.GetIsHonorRatingNeeded.Variables>
	) {
		return this.client.request<Api.GetIsHonorRatingNeeded.Data>({
			...Api.GetIsHonorRatingNeeded.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getSaleProgressPercentages(
		...[variables]: ElideVariables<Api.GetSaleProgressPercentages.Variables>
	) {
		return this.client.request<Api.GetSaleProgressPercentages.Data>({
			...Api.GetSaleProgressPercentages.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getSearchHistory(
		...[variables]: ElideVariables<Api.GetSearchHistory.Variables>
	) {
		return this.client.request<Api.GetSearchHistory.Data>({
			...Api.GetSearchHistory.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getUserNotificationsCount(
		...[variables]: ElideVariables<Api.GetUserNotificationsCount.Variables>
	) {
		return this.client.request<Api.GetUserNotificationsCount.Data>({
			...Api.GetUserNotificationsCount.request,
			variables: useDefaultVariables(variables),
		})
	}

	async dashboardHeaderGetInfo(
		...[variables]: ElideVariables<Api.DashboardHeaderGetInfo.Variables>
	) {
		return this.client.request<Api.DashboardHeaderGetInfo.Data>({
			...Api.DashboardHeaderGetInfo.request,
			variables: useDefaultVariables(variables),
		})
	}

	async deadlinesGetDeadlines(
		...[variables]: ElideVariables<Api.DeadlinesGetDeadlines.Variables>
	) {
		return this.client.request<Api.DeadlinesGetDeadlines.Data>({
			...Api.DeadlinesGetDeadlines.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getDashboardBuildings(
		...[variables]: ElideVariables<Api.GetDashboardBuildings.Variables>
	) {
		return this.client.request<Api.GetDashboardBuildings.Data>({
			...Api.GetDashboardBuildings.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getUpcomingEvents(
		...[variables]: ElideVariables<Api.GetUpcomingEvents.Variables>
	) {
		return this.client.request<Api.GetUpcomingEvents.Data>({
			...Api.GetUpcomingEvents.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getAgendaEvents(
		...[variables]: ElideVariables<Api.GetAgendaEvents.Variables>
	) {
		return this.client.request<Api.GetAgendaEvents.Data>({
			...Api.GetAgendaEvents.request,
			variables: useDefaultVariables(variables),
		})
	}

	async widgetAchievementsGetLastBadges(
		...[
			variables,
		]: ElideVariables<Api.WidgetAchievementsGetLastBadges.Variables>
	) {
		return this.client.request<Api.WidgetAchievementsGetLastBadges.Data>({
			...Api.WidgetAchievementsGetLastBadges.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getDashboardWorkstation(
		...[variables]: ElideVariables<Api.GetDashboardWorkstation.Variables>
	) {
		return this.client.request<Api.GetDashboardWorkstation.Data>({
			...Api.GetDashboardWorkstation.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getStudentStageGroupS21(
		...[variables]: ElideVariables<Api.GetStudentStageGroupS21.Variables>
	) {
		return this.client.request<Api.GetStudentStageGroupS21.Data>({
			...Api.GetStudentStageGroupS21.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getAsapWidgets(
		...[variables]: ElideVariables<Api.GetAsapWidgets.Variables>
	) {
		return this.client.request<Api.GetAsapWidgets.Data>({
			...Api.GetAsapWidgets.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getCurrentUser(
		...[variables]: ElideVariables<Api.GetCurrentUser.Variables>
	) {
		return this.client.request<Api.GetCurrentUser.Data>({
			...Api.GetCurrentUser.request,
			variables: useDefaultVariables(variables),
		})
	}

	async calendarGetEvents(
		...[variables]: ElideVariables<Api.CalendarGetEvents.Variables>
	) {
		return this.client.request<Api.CalendarGetEvents.Data>({
			...Api.CalendarGetEvents.request,
			variables: useDefaultVariables(variables),
		})
	}

	async calendarGetMyBookings(
		...[variables]: ElideVariables<Api.CalendarGetMyBookings.Variables>
	) {
		return this.client.request<Api.CalendarGetMyBookings.Data>({
			...Api.CalendarGetMyBookings.request,
			variables: useDefaultVariables(variables),
		})
	}

	async calendarGetMyReviews(
		...[variables]: ElideVariables<Api.CalendarGetMyReviews.Variables>
	) {
		return this.client.request<Api.CalendarGetMyReviews.Data>({
			...Api.CalendarGetMyReviews.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getPenaltyReasons(
		...[variables]: ElideVariables<Api.GetPenaltyReasons.Variables>
	) {
		return this.client.request<Api.GetPenaltyReasons.Data>({
			...Api.GetPenaltyReasons.request,
			variables: useDefaultVariables(variables),
		})
	}

	async calendarDeleteEventSlot(
		...[variables]: ElideVariables<Api.CalendarDeleteEventSlot.Variables>
	) {
		return this.client.request<Api.CalendarDeleteEventSlot.Data>({
			...Api.CalendarDeleteEventSlot.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getAgendaP2P(
		...[variables]: ElideVariables<Api.GetAgendaP2P.Variables>
	) {
		return this.client.request<Api.GetAgendaP2P.Data>({
			...Api.GetAgendaP2P.request,
			variables: useDefaultVariables(variables),
		})
	}

	async createFilledChecklist(
		...[variables]: ElideVariables<Api.CreateFilledChecklist.Variables>
	) {
		return this.client.request<Api.CreateFilledChecklist.Data>({
			...Api.CreateFilledChecklist.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getCredentialsByLogin(
		...[variables]: ElideVariables<Api.GetCredentialsByLogin.Variables>
	) {
		return this.client.request<Api.GetCredentialsByLogin.Data>({
			...Api.GetCredentialsByLogin.request,
			variables: useDefaultVariables(variables),
		})
	}

	async publicProfileGetPersonalInfo(
		...[variables]: ElideVariables<Api.PublicProfileGetPersonalInfo.Variables>
	) {
		return this.client.request<Api.PublicProfileGetPersonalInfo.Data>({
			...Api.PublicProfileGetPersonalInfo.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getDismissInfoByStudentId(
		...[variables]: ElideVariables<Api.GetDismissInfoByStudentId.Variables>
	) {
		return this.client.request<Api.GetDismissInfoByStudentId.Data>({
			...Api.GetDismissInfoByStudentId.request,
			variables: useDefaultVariables(variables),
		})
	}

	async publicProfileGetCoalition(
		...[variables]: ElideVariables<Api.PublicProfileGetCoalition.Variables>
	) {
		return this.client.request<Api.PublicProfileGetCoalition.Data>({
			...Api.PublicProfileGetCoalition.request,
			variables: useDefaultVariables(variables),
		})
	}

	async publicProfileGetAchievements(
		...[variables]: ElideVariables<Api.PublicProfileGetAchievements.Variables>
	) {
		return this.client.request<Api.PublicProfileGetAchievements.Data>({
			...Api.PublicProfileGetAchievements.request,
			variables: useDefaultVariables(variables),
		})
	}

	async publicProfileLoadAverageLogtime(
		...[
			variables,
		]: ElideVariables<Api.PublicProfileLoadAverageLogtime.Variables>
	) {
		return this.client.request<Api.PublicProfileLoadAverageLogtime.Data>({
			...Api.PublicProfileLoadAverageLogtime.request,
			variables: useDefaultVariables(variables),
		})
	}

	async publicProfileLoadStageGroups(
		...[variables]: ElideVariables<Api.PublicProfileLoadStageGroups.Variables>
	) {
		return this.client.request<Api.PublicProfileLoadStageGroups.Data>({
			...Api.PublicProfileLoadStageGroups.request,
			variables: useDefaultVariables(variables),
		})
	}

	async publicProfileGetSoftSkills(
		...[variables]: ElideVariables<Api.PublicProfileGetSoftSkills.Variables>
	) {
		return this.client.request<Api.PublicProfileGetSoftSkills.Data>({
			...Api.PublicProfileGetSoftSkills.request,
			variables: useDefaultVariables(variables),
		})
	}

	async publicProfileGetXpGraph(
		...[variables]: ElideVariables<Api.PublicProfileGetXpGraph.Variables>
	) {
		return this.client.request<Api.PublicProfileGetXpGraph.Data>({
			...Api.PublicProfileGetXpGraph.request,
			variables: useDefaultVariables(variables),
		})
	}

	async publicProfileGetStudentTraffic(
		...[
			variables,
		]: ElideVariables<Api.PublicProfileGetStudentTraffic.Variables>
	) {
		return this.client.request<Api.PublicProfileGetStudentTraffic.Data>({
			...Api.PublicProfileGetStudentTraffic.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getUserNotifications(
		...[variables]: ElideVariables<Api.GetUserNotifications.Variables>
	) {
		return this.client.request<Api.GetUserNotifications.Data>({
			...Api.GetUserNotifications.request,
			variables: useDefaultVariables(variables),
		})
	}

	async readUserNotifications(
		...[variables]: ElideVariables<Api.ReadUserNotifications.Variables>
	) {
		return this.client.request<Api.ReadUserNotifications.Data>({
			...Api.ReadUserNotifications.request,
			variables: useDefaultVariables(variables),
		})
	}

	async saveFilledChecklist(
		...[variables]: ElideVariables<Api.SaveFilledChecklist.Variables>
	) {
		return this.client.request<Api.SaveFilledChecklist.Data>({
			...Api.SaveFilledChecklist.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getInvitationsCount(
		...[variables]: ElideVariables<Api.GetInvitationsCount.Variables>
	) {
		return this.client.request<Api.GetInvitationsCount.Data>({
			...Api.GetInvitationsCount.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getStudentCurrentProjects(
		...[variables]: ElideVariables<Api.GetStudentCurrentProjects.Variables>
	) {
		return this.client.request<Api.GetStudentCurrentProjects.Data>({
			...Api.GetStudentCurrentProjects.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getAvailableCodeReviewProjects(
		...[
			variables,
		]: ElideVariables<Api.GetAvailableCodeReviewProjects.Variables>
	) {
		return this.client.request<Api.GetAvailableCodeReviewProjects.Data>({
			...Api.GetAvailableCodeReviewProjects.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getFirstRoundCodeReviewProjects(
		...[
			variables,
		]: ElideVariables<Api.GetFirstRoundCodeReviewProjects.Variables>
	) {
		return this.client.request<Api.GetFirstRoundCodeReviewProjects.Data>({
			...Api.GetFirstRoundCodeReviewProjects.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getSecondRoundCodeReviewProjects(
		...[
			variables,
		]: ElideVariables<Api.GetSecondRoundCodeReviewProjects.Variables>
	) {
		return this.client.request<Api.GetSecondRoundCodeReviewProjects.Data>({
			...Api.GetSecondRoundCodeReviewProjects.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getCodeReviewProjectInfo(
		...[variables]: ElideVariables<Api.GetCodeReviewProjectInfo.Variables>
	) {
		return this.client.request<Api.GetCodeReviewProjectInfo.Data>({
			...Api.GetCodeReviewProjectInfo.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getCodeReviewMyStudent(
		...[variables]: ElideVariables<Api.GetCodeReviewMyStudent.Variables>
	) {
		return this.client.request<Api.GetCodeReviewMyStudent.Data>({
			...Api.GetCodeReviewMyStudent.request,
			variables: useDefaultVariables(variables),
		})
	}

	async calendarGetStudentCodeReviews(
		...[
			variables,
		]: ElideVariables<Api.CalendarGetStudentCodeReviews.Variables>
	) {
		return this.client.request<Api.CalendarGetStudentCodeReviews.Data>({
			...Api.CalendarGetStudentCodeReviews.request,
			variables: useDefaultVariables(variables),
		})
	}

	async calendarGetCodeReviewData(
		...[variables]: ElideVariables<Api.CalendarGetCodeReviewData.Variables>
	) {
		return this.client.request<Api.CalendarGetCodeReviewData.Data>({
			...Api.CalendarGetCodeReviewData.request,
			variables: useDefaultVariables(variables),
		})
	}

	async calendarAddCodeReviewToEventSlot(
		...[
			variables,
		]: ElideVariables<Api.CalendarAddCodeReviewToEventSlot.Variables>
	) {
		return this.client.request<Api.CalendarAddCodeReviewToEventSlot.Data>({
			...Api.CalendarAddCodeReviewToEventSlot.request,
			variables: useDefaultVariables(variables),
		})
	}

	async calendarAddBookingToEventSlot(
		...[
			variables,
		]: ElideVariables<Api.CalendarAddBookingToEventSlot.Variables>
	) {
		return this.client.request<Api.CalendarAddBookingToEventSlot.Data>({
			...Api.CalendarAddBookingToEventSlot.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getCodeReviewPointChargedOff(
		...[variables]: ElideVariables<Api.GetCodeReviewPointChargedOff.Variables>
	) {
		return this.client.request<Api.GetCodeReviewPointChargedOff.Data>({
			...Api.GetCodeReviewPointChargedOff.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getProjectConsistencyInfo(
		...[variables]: ElideVariables<Api.GetProjectConsistencyInfo.Variables>
	) {
		return this.client.request<Api.GetProjectConsistencyInfo.Data>({
			...Api.GetProjectConsistencyInfo.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getProjectInfo(
		...[variables]: ElideVariables<Api.GetProjectInfo.Variables>
	) {
		return this.client.request<Api.GetProjectInfo.Data>({
			...Api.GetProjectInfo.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getProjectAttemptEvaluationsInfo(
		...[
			variables,
		]: ElideVariables<Api.GetProjectAttemptEvaluationsInfo.Variables>
	) {
		return this.client.request<Api.GetProjectAttemptEvaluationsInfo.Data>({
			...Api.GetProjectAttemptEvaluationsInfo.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getProjectGitlabStatus(
		...[variables]: ElideVariables<Api.GetProjectGitlabStatus.Variables>
	) {
		return this.client.request<Api.GetProjectGitlabStatus.Data>({
			...Api.GetProjectGitlabStatus.request,
			variables: useDefaultVariables(variables),
		})
	}

	async calendarGetModule(
		...[variables]: ElideVariables<Api.CalendarGetModule.Variables>
	) {
		return this.client.request<Api.CalendarGetModule.Data>({
			...Api.CalendarGetModule.request,
			variables: useDefaultVariables(variables),
		})
	}

	async calendarGetNameLessStudentTimeslotsForReview(
		...[
			variables,
		]: ElideVariables<Api.CalendarGetNameLessStudentTimeslotsForReview.Variables>
	) {
		return this.client.request<Api.CalendarGetNameLessStudentTimeslotsForReview.Data>(
			{
				...Api.CalendarGetNameLessStudentTimeslotsForReview.request,
				variables: useDefaultVariables(variables),
			},
		)
	}

	async bonusesGetBadgesWithFakePublicProfile(
		...[
			variables,
		]: ElideVariables<Api.BonusesGetBadgesWithFakePublicProfile.Variables>
	) {
		return this.client.request<Api.BonusesGetBadgesWithFakePublicProfile.Data>(
			{
				...Api.BonusesGetBadgesWithFakePublicProfile.request,
				variables: useDefaultVariables(variables),
			},
		)
	}

	async getCampusCurrentUser(
		...[variables]: ElideVariables<Api.GetCampusCurrentUser.Variables>
	) {
		return this.client.request<Api.GetCampusCurrentUser.Data>({
			...Api.GetCampusCurrentUser.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getCampusWorkstation(
		...[variables]: ElideVariables<Api.GetCampusWorkstation.Variables>
	) {
		return this.client.request<Api.GetCampusWorkstation.Data>({
			...Api.GetCampusWorkstation.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getCampusBuildings(
		...[variables]: ElideVariables<Api.GetCampusBuildings.Variables>
	) {
		return this.client.request<Api.GetCampusBuildings.Data>({
			...Api.GetCampusBuildings.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getCampusPlanOccupied(
		...[variables]: ElideVariables<Api.GetCampusPlanOccupied.Variables>
	) {
		return this.client.request<Api.GetCampusPlanOccupied.Data>({
			...Api.GetCampusPlanOccupied.request,
			variables: useDefaultVariables(variables),
		})
	}

	async calendarAddEvent(
		...[variables]: ElideVariables<Api.CalendarAddEvent.Variables>
	) {
		return this.client.request<Api.CalendarAddEvent.Data>({
			...Api.CalendarAddEvent.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getActivityTypes(
		...[variables]: ElideVariables<Api.GetActivityTypes.Variables>
	) {
		return this.client.request<Api.GetActivityTypes.Data>({
			...Api.GetActivityTypes.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getStageInfo(
		...[variables]: ElideVariables<Api.GetStageInfo.Variables>
	) {
		return this.client.request<Api.GetStageInfo.Data>({
			...Api.GetStageInfo.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getUsers(...[variables]: ElideVariables<Api.GetUsers.Variables>) {
		return this.client.request<Api.GetUsers.Data>({
			...Api.GetUsers.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getMySuggestedActivities(
		...[variables]: ElideVariables<Api.GetMySuggestedActivities.Variables>
	) {
		return this.client.request<Api.GetMySuggestedActivities.Data>({
			...Api.GetMySuggestedActivities.request,
			variables: useDefaultVariables(variables),
		})
	}

	async subscribeToEvent(
		...[variables]: ElideVariables<Api.SubscribeToEvent.Variables>
	) {
		return this.client.request<Api.SubscribeToEvent.Data>({
			...Api.SubscribeToEvent.request,
			variables: useDefaultVariables(variables),
		})
	}

	async unsubscribeFromEvent(
		...[variables]: ElideVariables<Api.UnsubscribeFromEvent.Variables>
	) {
		return this.client.request<Api.UnsubscribeFromEvent.Data>({
			...Api.UnsubscribeFromEvent.request,
			variables: useDefaultVariables(variables),
		})
	}

	async publicProfileGetProjects(
		...[variables]: ElideVariables<Api.PublicProfileGetProjects.Variables>
	) {
		return this.client.request<Api.PublicProfileGetProjects.Data>({
			...Api.PublicProfileGetProjects.request,
			variables: useDefaultVariables(variables),
		})
	}

	async publicProfileGetCredentialsByLogin(
		...[
			variables,
		]: ElideVariables<Api.PublicProfileGetCredentialsByLogin.Variables>
	) {
		return this.client.request<Api.PublicProfileGetCredentialsByLogin.Data>({
			...Api.PublicProfileGetCredentialsByLogin.request,
			variables: useDefaultVariables(variables),
		})
	}

	async bonusesGetUserIdByLogin(
		...[variables]: ElideVariables<Api.BonusesGetUserIdByLogin.Variables>
	) {
		return this.client.request<Api.BonusesGetUserIdByLogin.Data>({
			...Api.BonusesGetUserIdByLogin.request,
			variables: useDefaultVariables(variables),
		})
	}

	async competitionCoalitionGetUserTournament(
		...[
			variables,
		]: ElideVariables<Api.CompetitionCoalitionGetUserTournament.Variables>
	) {
		return this.client.request<Api.CompetitionCoalitionGetUserTournament.Data>(
			{
				...Api.CompetitionCoalitionGetUserTournament.request,
				variables: useDefaultVariables(variables),
			},
		)
	}

	async competitionCoalitionGetMyCoalitionMembers(
		...[
			variables,
		]: ElideVariables<Api.CompetitionCoalitionGetMyCoalitionMembers.Variables>
	) {
		return this.client.request<Api.CompetitionCoalitionGetMyCoalitionMembers.Data>(
			{
				...Api.CompetitionCoalitionGetMyCoalitionMembers.request,
				variables: useDefaultVariables(variables),
			},
		)
	}

	async getPenaltyList(
		...[variables]: ElideVariables<Api.GetPenaltyList.Variables>
	) {
		return this.client.request<Api.GetPenaltyList.Data>({
			...Api.GetPenaltyList.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getPenaltiesCount(
		...[variables]: ElideVariables<Api.GetPenaltiesCount.Variables>
	) {
		return this.client.request<Api.GetPenaltiesCount.Data>({
			...Api.GetPenaltiesCount.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getGraphCurrentType(
		...[variables]: ElideVariables<Api.GetGraphCurrentType.Variables>
	) {
		return this.client.request<Api.GetGraphCurrentType.Data>({
			...Api.GetGraphCurrentType.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getGraphBasisGoals(
		...[variables]: ElideVariables<Api.GetGraphBasisGoals.Variables>
	) {
		return this.client.request<Api.GetGraphBasisGoals.Data>({
			...Api.GetGraphBasisGoals.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getTasks(...[variables]: ElideVariables<Api.GetTasks.Variables>) {
		return this.client.request<Api.GetTasks.Data>({
			...Api.GetTasks.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getGitlabLink(
		...[variables]: ElideVariables<Api.GetGitlabLink.Variables>
	) {
		return this.client.request<Api.GetGitlabLink.Data>({
			...Api.GetGitlabLink.request,
			variables: useDefaultVariables(variables),
		})
	}

	async createFeedbackOnEvaluation(
		...[variables]: ElideVariables<Api.CreateFeedbackOnEvaluation.Variables>
	) {
		return this.client.request<Api.CreateFeedbackOnEvaluation.Data>({
			...Api.CreateFeedbackOnEvaluation.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getProjectTeamWithMembers(
		...[variables]: ElideVariables<Api.GetProjectTeamWithMembers.Variables>
	) {
		return this.client.request<Api.GetProjectTeamWithMembers.Data>({
			...Api.GetProjectTeamWithMembers.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getIsDisbandRequestAlreadySent(
		...[
			variables,
		]: ElideVariables<Api.GetIsDisbandRequestAlreadySent.Variables>
	) {
		return this.client.request<Api.GetIsDisbandRequestAlreadySent.Data>({
			...Api.GetIsDisbandRequestAlreadySent.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getGitlabSettingsToken(
		...[variables]: ElideVariables<Api.GetGitlabSettingsToken.Variables>
	) {
		return this.client.request<Api.GetGitlabSettingsToken.Data>({
			...Api.GetGitlabSettingsToken.request,
			variables: useDefaultVariables(variables),
		})
	}

	async cancelInvitation(
		...[variables]: ElideVariables<Api.CancelInvitation.Variables>
	) {
		return this.client.request<Api.CancelInvitation.Data>({
			...Api.CancelInvitation.request,
			variables: useDefaultVariables(variables),
		})
	}

	async getAvailableStudentsForTeams(
		...[variables]: ElideVariables<Api.GetAvailableStudentsForTeams.Variables>
	) {
		return this.client.request<Api.GetAvailableStudentsForTeams.Data>({
			...Api.GetAvailableStudentsForTeams.request,
			variables: useDefaultVariables(variables),
		})
	}

	async sendInvitation(
		...[variables]: ElideVariables<Api.SendInvitation.Variables>
	) {
		return this.client.request<Api.SendInvitation.Data>({
			...Api.SendInvitation.request,
			variables: useDefaultVariables(variables),
		})
	}

	async removeP2P(...[variables]: ElideVariables<Api.RemoveP2P.Variables>) {
		return this.client.request<Api.RemoveP2P.Data>({
			...Api.RemoveP2P.request,
			variables: useDefaultVariables(variables),
		})
	}

	async calendarGetExams(
		...[variables]: ElideVariables<Api.CalendarGetExams.Variables>
	) {
		return this.client.request<Api.CalendarGetExams.Data>({
			...Api.CalendarGetExams.request,
			variables: useDefaultVariables(variables),
		})
	}
}
