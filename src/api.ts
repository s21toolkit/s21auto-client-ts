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
			"query getUserRestrictionsInfo { school21 { getUserRestrictions { restrictionId restrictionType userId schoolId isActive createdTs updatedTs __typename } __typename } } ",
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
			"query userRoleLoaderGetRoles { user { getCurrentUser { functionalRoles { code __typename } id studentRoles { id school { id shortName organizationType __typename } status __typename } userSchoolPermissions { schoolId permissions __typename } systemAdminRole { id __typename } businessAdminRolesV2 { id school { id organizationType __typename } orgUnitId __typename } __typename } getCurrentUserSchoolRoles { schoolId __typename } __typename } } ",
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
			"query getUserFeatureFlags($entityId: String!) { user { getAllBackendConfigurations: getAllBackendConfigurationsV2(entityId: $entityId) { propertyCode value __typename } __typename } } ",
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
			"query getStudentIsDeadlinesEnabled { student { isDeadlinesEnabled __typename } } ",
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
			"query getTournamentNotificationResults { student { getTournamentResults(isShown: false) { id power coalitionRank userRank firstCoalitionName coalitionName timeClosed __typename } __typename } } ",
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
			"query deadlinesGetStudentData { student { getStudentProfile { user { id login firstName middleName lastName __typename } __typename } getExperience { id value level { id range { id levelCode rightBorder leftBorder __typename } __typename } __typename } getExperienceHistory { id awardDate experienceReceived __typename } __typename } } ",
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
			"query deadlineReminderGetClosestDeadlinePopup { student { getClosestDeadlinePopup { deadline { ...DeadlineData __typename } deadlineGoal { ...DeadlineGoalData __typename } shiftCount __typename } __typename } } fragment DeadlineData on Deadline { deadlineId description comment deadlineToDaysArray deadlineTs createTs updateTs status rules { logicalOperatorId rulesInGroup { logicalOperatorId value { fieldId subFieldKey operator value __typename } __typename } __typename } __typename } fragment DeadlineGoalData on DeadlineGoal { goalProjects { studentGoalId project { goalName goalId __typename } status executionType finalPercentage finalPoint pointTask __typename } goalCourses { ...GoalCourse __typename } levels { ...Level __typename } __typename } fragment GoalCourse on CourseCoverInformation { localCourseId courseName courseType experienceFact finalPercentage displayedCourseStatus __typename } fragment Level on ExperienceLevelRange { id level levelCode leftBorder rightBorder __typename } ",
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
			"query eventsWithoutFeedback($from: DateTime!, $to: DateTime!) { student { getCalendarEventsWithoutFeedback(from: $from, to: $to) { id activity { eventId name endDate __typename } __typename } __typename } } ",
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
			"query getIsHonorRatingNeeded { student { isHonorRatingNeeded __typename } } ",
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
			"query getSaleProgressPercentages { school21 { getSaleProgressPercentages { ...RpSaleInfo __typename } __typename } } fragment RpSaleInfo on RpSaleProgress { rpType progressPercentage __typename } ",
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
			"query getSearchHistory { school21 { getSearchHistoryTooltips { tooltipText tooltipCategory __typename } __typename } } ",
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
			"query getUserNotificationsCount($wasReadIncluded: Boolean) { student { getS21NotificationsCount(wasReadIncluded: $wasReadIncluded) __typename } } ",
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
			"query dashboardHeaderGetInfo { user { getCurrentUser { id login avatarUrl firstName middleName lastName currentSchoolStudentId studentRoles { id status school { id shortName __typename } __typename } __typename } __typename } student { getUserTournamentWidget { coalitionMember { coalition { avatarUrl color name memberCount __typename } currentTournamentPowerRank { rank __typename } __typename } lastTournamentResult { userRank __typename } __typename } getExperience { id value level { id range { id levelCode rightBorder leftBorder __typename } __typename } cookiesCount coinsCount codeReviewPoints __typename } __typename } } ",
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
			"query deadlinesGetDeadlines($deadlineStatuses: [DeadlineStatus!]!, $page: PagingInput!, $deadlinesFrom: DateTime, $deadlinesTo: DateTime, $sorting: [SortingField]) { student { getDeadlines( deadlineStatuses: $deadlineStatuses page: $page deadlineFrom: $deadlinesFrom deadlineTo: $deadlinesTo sorting: $sorting ) { deadline { ...DeadlineData __typename } shiftRequests { deadlineShiftRequestId status daysToShift createTs __typename } deadlineGoal { ...DeadlineGoalData __typename } shiftCount __typename } __typename } } fragment DeadlineData on Deadline { deadlineId description comment deadlineToDaysArray deadlineTs createTs updateTs status rules { logicalOperatorId rulesInGroup { logicalOperatorId value { fieldId subFieldKey operator value __typename } __typename } __typename } __typename } fragment DeadlineGoalData on DeadlineGoal { goalProjects { studentGoalId project { goalName goalId __typename } status executionType finalPercentage finalPoint pointTask __typename } goalCourses { ...GoalCourse __typename } levels { ...Level __typename } __typename } fragment GoalCourse on CourseCoverInformation { localCourseId courseName courseType experienceFact finalPercentage displayedCourseStatus __typename } fragment Level on ExperienceLevelRange { id level levelCode leftBorder rightBorder __typename } ",
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
			"query getDashboardBuildings { student { getBuildings { id classrooms { id number __typename } __typename } __typename } } ",
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
			"query getUpcomingEvents($eventCodes: [String!]!, $registrationAccessStatusFilter: RegistartionStatusEnum, $page: PagingInput) { student { getUpcomingEventsForRegistration( eventCodes: $eventCodes registrationAccessStatusFilter: $registrationAccessStatusFilter page: $page ) { ...UpcomingEvent __typename } __typename } } fragment UpcomingEvent on CalendarEvent { id start end bookings { id task { id goalName __typename } __typename } eventSlots { id eventId type start end __typename } maxStudentCount location ipRange eventType eventCode description externalId currentStudentsCount exam { examId eventId beginDate endDate location ip maxStudentCount isVisible name goalId isWaitListActive isInWaitList currentStudentsCount createDate updateDate schoolId stopRegisterDate isRegistered goalName eventType registrationAccessStatus __typename } studentCodeReview { studentGoalId __typename } activity { activityEventId eventId beginDate endDate location description maxStudentCount isVisible name isWaitListActive isInWaitList currentStudentsCount createDate updateDate schoolId stopRegisterDate isRegistered activityType eventType isMandatory status organizers { id login __typename } __typename } penalty { ...Penalty __typename } __typename } fragment Penalty on Penalty { comment id duration status startTime createTime penaltySlot { currentStudentsCount description duration startTime id endTime __typename } reasonId __typename } ",
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
			"query getAgendaEvents($from: DateTime!, $to: DateTime!, $limit: Int!) { student { getMyAgendaEvents(from: $from, to: $to, limit: $limit) { agendaItemContext { entityId entityType __typename } start end label description agendaEventType additionalInfo { key value __typename } __typename } __typename } } ",
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
			"query widgetAchievementsGetLastBadges($limit: Int) { student { getLastBadges(limit: $limit) { id points badge { name avatarUrl __typename } award { awardBounties { awardLevelId __typename } __typename } __typename } __typename } } ",
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
			"query getDashboardWorkstation($login: String!) { student { getWorkstationByLogin(login: $login) { id classroomId hostName classroom { floor __typename } __typename } __typename } } ",
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
			"query getStudentStageGroupS21($studentId: UUID!) { student { getStageGroupS21PublicProfile(studentId: $studentId) { waveId waveName eduForm __typename } __typename } } ",
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
			"query getAsapWidgets { student { getAsapWidgetList { widgetList { ...AsapWidget __typename } __typename } __typename } } fragment AsapWidget on AsapWidgetInfo { shortImg shortTitle shortUrl startDate finishDate showFinishDate fullTitle text fullImgUrl adtTypeId adtWidgetId __typename } ",
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
			"query getCurrentUser { user { getCurrentUser { ...CurrentUser __typename } __typename } student { getExperience { ...CurrentUserExperience __typename } __typename } } fragment CurrentUser on User { id avatarUrl login firstName middleName lastName currentSchoolStudentId __typename } fragment CurrentUserExperience on UserExperience { id cookiesCount codeReviewPoints coinsCount level { id range { id levelCode __typename } __typename } __typename } ",
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
			"query calendarGetEvents($from: DateTime!, $to: DateTime!) { student { getMyCalendarEvents(from: $from, to: $to) { ...CalendarEvent __typename } __typename } } fragment CalendarEvent on CalendarEvent { id start end description eventType eventCode eventSlots { id type start end __typename } bookings { ...CalendarReviewBooking __typename } exam { ...CalendarEventExam __typename } studentCodeReview { studentGoalId __typename } activity { ...CalendarEventActivity studentFeedback { id rating comment __typename } status activityType isMandatory isWaitListActive isVisible comments { type createTs comment __typename } organizers { id login __typename } __typename } goals { goalId goalName __typename } penalty { ...Penalty __typename } __typename } fragment CalendarReviewBooking on CalendarBooking { id answerId eventSlotId task { id goalId goalName studentTaskAdditionalAttributes { cookiesCount __typename } assignmentType __typename } eventSlot { id start end event { eventUserRole __typename } __typename } verifierUser { ...CalendarReviewUser __typename } verifiableStudent { id user { ...CalendarReviewUser __typename } __typename } bookingStatus team { ...ProjectTeamMembers __typename } isOnline vcLinkUrl __typename } fragment CalendarReviewUser on User { id login __typename } fragment ProjectTeamMembers on ProjectTeamMembers { id teamLead { ...ProjectTeamMember __typename } members { ...ProjectTeamMember __typename } invitedUsers { ...ProjectTeamMember __typename } teamName teamStatus minTeamMemberCount maxTeamMemberCount __typename } fragment ProjectTeamMember on User { id avatarUrl login userExperience { level { id range { levelCode __typename } __typename } cookiesCount codeReviewPoints __typename } __typename } fragment CalendarEventExam on Exam { examId eventId beginDate endDate name location currentStudentsCount maxStudentCount updateDate goalId goalName isWaitListActive isInWaitList stopRegisterDate __typename } fragment CalendarEventActivity on ActivityEvent { activityEventId eventId name beginDate endDate isRegistered description currentStudentsCount maxStudentCount location updateDate isWaitListActive isInWaitList stopRegisterDate __typename } fragment Penalty on Penalty { comment id duration status startTime createTime penaltySlot { currentStudentsCount description duration startTime id endTime __typename } reasonId __typename } ",
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
			"query calendarGetMyBookings($from: DateTime!, $to: DateTime!) { student { getMyCalendarBookings(from: $from, to: $to) { ...CalendarReviewBooking __typename } __typename } } fragment CalendarReviewBooking on CalendarBooking { id answerId eventSlotId task { id goalId goalName studentTaskAdditionalAttributes { cookiesCount __typename } assignmentType __typename } eventSlot { id start end event { eventUserRole __typename } __typename } verifierUser { ...CalendarReviewUser __typename } verifiableStudent { id user { ...CalendarReviewUser __typename } __typename } bookingStatus team { ...ProjectTeamMembers __typename } isOnline vcLinkUrl __typename } fragment CalendarReviewUser on User { id login __typename } fragment ProjectTeamMembers on ProjectTeamMembers { id teamLead { ...ProjectTeamMember __typename } members { ...ProjectTeamMember __typename } invitedUsers { ...ProjectTeamMember __typename } teamName teamStatus minTeamMemberCount maxTeamMemberCount __typename } fragment ProjectTeamMember on User { id avatarUrl login userExperience { level { id range { levelCode __typename } __typename } cookiesCount codeReviewPoints __typename } __typename } ",
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
			"query calendarGetMyReviews($to: DateTime, $limit: Int) { student { getMyUpcomingBookings(to: $to, limit: $limit) { ...Review __typename } __typename } } fragment Review on CalendarBooking { id answerId eventSlot { id start end __typename } task { id title assignmentType goalId goalName studentTaskAdditionalAttributes { cookiesCount __typename } __typename } verifierUser { ...UserInBooking __typename } verifiableStudent { id user { ...UserInBooking __typename } __typename } team { ...ProjectTeamMembers __typename } bookingStatus isOnline vcLinkUrl __typename } fragment UserInBooking on User { id login avatarUrl userExperience { level { id range { levelCode __typename } __typename } __typename } __typename } fragment ProjectTeamMembers on ProjectTeamMembers { id teamLead { ...ProjectTeamMember __typename } members { ...ProjectTeamMember __typename } invitedUsers { ...ProjectTeamMember __typename } teamName teamStatus minTeamMemberCount maxTeamMemberCount __typename } fragment ProjectTeamMember on User { id avatarUrl login userExperience { level { id range { levelCode __typename } __typename } cookiesCount codeReviewPoints __typename } __typename } ",
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
			"query getPenaltyReasons { school21 { getPenaltyReasons { id name __typename } __typename } } ",
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
			"mutation calendarDeleteEventSlot($eventSlotId: ID!) { student { deleteEventSlot(eventSlotId: $eventSlotId) __typename } } ",
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
			"query getAgendaP2P($bookingId: ID!) { student { getEnrichedBooking(bookingId: $bookingId) { id eventSlot { start __typename } task { goalId goalName assignmentType studentTaskAdditionalAttributes { cookiesCount __typename } __typename } verifierUser { id login avatarUrl userExperience { level { range { levelCode __typename } __typename } __typename } __typename } verifiableStudent { user { id login avatarUrl userExperience { level { range { levelCode __typename } __typename } __typename } __typename } __typename } answerId team { teamName teamLead { id avatarUrl login userExperience { level { range { levelCode __typename } __typename } __typename } __typename } members { id avatarUrl login userExperience { level { range { levelCode __typename } __typename } __typename } __typename } __typename } bookingStatus isOnline vcLinkUrl __typename } __typename } } ",
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
			"mutation createFilledChecklist($studentAnswerId: ID!) { student { createFilledChecklist(studentAnswerId: $studentAnswerId) { id gitlabStudentProjectUrl { sshLink httpsLink __typename } checklist { ...FormChecklist __typename } moduleInfoP2P { ...FilledChecklistModuleInfo __typename } progressCheckInfo { reviewUserCount reviewUserCountExecuted __typename } verifiableUsers { teamWithMembers { team { id name __typename } members { ...TeamMember __typename } __typename } user { ...TeamMemberUser __typename } __typename } video { filledChecklistId link status statusDetails __typename } __typename } __typename } } fragment FormChecklist on Checklist { language introduction guidelines sectionList { ...FormChecklistSection __typename } quickActions __typename } fragment FormChecklistSection on ChecklistSection { checklistSectionId name description kindQuestionId questionList { ...FormChecklistQuestion __typename } __typename } fragment FormChecklistQuestion on SectionQuestion { sectionQuestionId name description taskAssessmentScale { criterionScaleId type description scaleWeights { key value __typename } __typename } __typename } fragment FilledChecklistModuleInfo on ModuleInfoP2P { moduleName executionType periodOfVerification __typename } fragment TeamMember on TeamMember { user { ...TeamMemberUser __typename } role __typename } fragment TeamMemberUser on User { id avatarUrl login userExperience { level { id levelCode range { levelCode __typename } __typename } cookiesCount codeReviewPoints __typename } __typename } ",
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
			"query getCredentialsByLogin($login: String!) { school21 { getStudentByLogin(login: $login) { studentId userId schoolId isActive isGraduate __typename } __typename } } ",
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
			"query publicProfileGetPersonalInfo($userId: UUID!, $studentId: UUID!, $login: String!, $schoolId: UUID!) { student { getAvatarByUserId(userId: $userId) getStageGroupS21PublicProfile(studentId: $studentId) { waveId waveName eduForm __typename } getExperiencePublicProfile(userId: $userId) { value level { levelCode range { leftBorder rightBorder __typename } __typename } cookiesCount coinsCount codeReviewPoints __typename } getEmailbyUserId(userId: $userId) getWorkstationByLogin(login: $login) { workstationId hostName row number __typename } getClassRoomByLogin(login: $login) { id number floor __typename } getFeedbackStatisticsAverageScore(studentId: $studentId) { countFeedback feedbackAverageScore { categoryCode categoryName value __typename } __typename } __typename } user { getSchool(schoolId: $schoolId) { id fullName shortName address __typename } __typename } } ",
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
			"query getDismissInfoByStudentId($studentId: UUID!) { school21 { getDismissInfoByStudentId(studentId: $studentId) { dismissTypeId dismissTs lastStageGroupS21 { waveId waveName eduForm active __typename } __typename } __typename } } ",
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
			"query publicProfileGetCoalition($userId: UUID!) { student { getUserTournamentWidget(userId: $userId) { coalitionMember { coalition { avatarUrl color name memberCount __typename } currentTournamentPowerRank { rank power { id points __typename } __typename } __typename } lastTournamentResult { userRank power __typename } __typename } __typename } } ",
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
			"query publicProfileGetAchievements($userId: UUID!) { student { getBadgesPublicProfile(userId: $userId) { points id badge { id name avatarUrl __typename } __typename } __typename } } ",
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
			"query publicProfileLoadAverageLogtime($login: String!, $schoolID: UUID!, $date: Date!) { school21 { loadAverageLogtime(login: $login, schoolID: $schoolID, date: $date) { week month weekPerMonth __typename } __typename } } ",
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
			"query publicProfileLoadStageGroups($userId: UUID!, $schoolId: UUID!) { school21 { loadStudentStageGroupsS21PublicProfile(userId: $userId, schoolId: $schoolId) { stageGroupStudentId studentId stageGroupS21 { waveId waveName eduForm active __typename } safeSchool { fullName __typename } __typename } __typename } } ",
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
			"query publicProfileGetSoftSkills($studentId: UUID!) { school21 { getSoftSkillsByStudentId(studentId: $studentId) { id type code totalPower hueSaturationLightness __typename } getSoftSkillLimitByStudentId(studentId: $studentId) { powerLimit __typename } __typename } } ",
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
			"query publicProfileGetXpGraph($userId: UUID!) { student { getExperienceHistoryDate(userId: $userId) { history { awardDate expValue __typename } __typename } __typename } } ",
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
			"query publicProfileGetStudentTraffic($login: String!, $schoolID: UUID!, $date: Date!) { student { getStudentTraffic(login: $login, schoolID: $schoolID, date: $date) { days { date periodOnCampus periodAuthorizSDP periodAuthorizIMac __typename } endDate startDate __typename } __typename } } ",
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
			"query getUserNotifications($paging: PagingInput!) { student { getS21Notifications(paging: $paging) { notifications { id relatedObjectType relatedObjectId message time wasRead groupName __typename } totalCount groupNames __typename } __typename } } ",
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
			"mutation readUserNotifications($notificationIds: [ID!]!) { student { readNotifications(notificationIds: $notificationIds) __typename } } ",
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
			"mutation saveFilledChecklist($filledChecklistInput: ChecklistFilledInput!) { student { completeP2pCheck(checklistFilledInput: $filledChecklistInput) __typename } } ",
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
			"query getInvitationsCount { team { getCreatedJoinTeamRequestCount __typename } } ",
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
			"query getStudentCurrentProjects($userId: ID!) { student { getStudentCurrentProjects(userId: $userId) { ...StudentProjectItem __typename } __typename } } fragment StudentProjectItem on StudentItem { goalId name description experience dateTime finalPercentage laboriousness executionType goalStatus courseType displayedCourseStatus amountAnswers amountMembers amountJoinedMembers amountReviewedAnswers amountCodeReviewMembers amountCurrentCodeReviewMembers groupName localCourseId __typename } ",
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
			"query getAvailableCodeReviewProjects($paging: PagingInput!) { student { getAvailableCodeReviewProjects(paging: $paging) { ...CodeReviewProject __typename } __typename } } fragment CodeReviewProject on CodeReview { goalId goalTitle studentGoalId studentCodeReviewStatus goalExecutionType studentTaskAdditionalAttributesModel { codeReviewCost codeReviewDuration __typename } __typename } ",
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
			"query getFirstRoundCodeReviewProjects($paging: PagingInput!) { student { getFirstRoundCodeReviewProjects(paging: $paging) { ...CodeReviewProject __typename } __typename } } fragment CodeReviewProject on CodeReview { goalId goalTitle studentGoalId studentCodeReviewStatus goalExecutionType studentTaskAdditionalAttributesModel { codeReviewCost codeReviewDuration __typename } __typename } ",
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
			"query getSecondRoundCodeReviewProjects($paging: PagingInput!) { student { getSecondRoundCodeReviewProjects(paging: $paging) { ...CodeReviewProject __typename } __typename } } fragment CodeReviewProject on CodeReview { goalId goalTitle studentGoalId studentCodeReviewStatus goalExecutionType studentTaskAdditionalAttributesModel { codeReviewCost codeReviewDuration __typename } __typename } ",
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
			"query getCodeReviewProjectInfo($studentGoalId: ID!) { student { getStudentModuleByStudentGoalId(studentGoalId: $studentGoalId) { ...CodeReviewProjectInfo __typename } __typename } } fragment CodeReviewProjectInfo on StudentModule { id moduleTitle studyModule { duration stage { name __typename } __typename } currentTask { ...CodeReviewCurrentTaskInfo __typename } __typename } fragment CodeReviewCurrentTaskInfo on StudentTask { id taskId task { content { body __typename } assignmentType studentTaskAdditionalAttributes { codeReviewDuration codeReviewCost __typename } __typename } __typename } ",
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
			"query getCodeReviewMyStudent($studentGoalId: ID!) { student { getMyStudentCodeReview(studentGoalId: $studentGoalId) { reviewerCommentsCount codeReviewRounds { ...CodeReviewRound __typename } __typename } __typename } } fragment CodeReviewRound on CodeReviewRound { eventId codeReviewRoundType codeReviewStatus startTime endTime mergeRequestURL createTime __typename } ",
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
			"query calendarGetStudentCodeReviews($studentGoalId: ID!) { student { getStudentCodeReviews(studentGoalId: $studentGoalId) { secondRoundStartDate __typename } __typename } } ",
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
			"query calendarGetCodeReviewData($studentGoalId: ID!) { student { getStudentModuleByStudentGoalId(studentGoalId: $studentGoalId) { moduleTitle currentTask { task { studentTaskAdditionalAttributes { codeReviewDuration __typename } __typename } __typename } __typename } __typename } } ",
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
			"mutation calendarAddCodeReviewToEventSlot($studentGoalId: ID!, $startTime: DateTime!) { student { addBookingCodeReviewToEventSlot( studentGoalId: $studentGoalId startTime: $startTime ) { id __typename } __typename } } ",
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
			"mutation calendarAddBookingToEventSlot( $answerId: ID! $startTime: DateTime! $wasStaffSlotChosen: Boolean! $isOnline: Boolean ) { student { addBookingP2PToEventSlot( answerId: $answerId startTime: $startTime wasStaffSlotChosen: $wasStaffSlotChosen isOnline: $isOnline ) { id __typename } __typename } } ",
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
			"query getCodeReviewPointChargedOff($goalId: ID!) { student { getCodeReviewPointChargedOff(goalId: $goalId) __typename } } ",
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
			"query getProjectConsistencyInfo($goalId: ID!) { school21 { loadGoalConsistencyInfo(goalId: $goalId) { goalId isConsistent __typename } __typename } } ",
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
			"query getProjectInfo($goalId: ID!) { student { getModuleById(goalId: $goalId) { ...ProjectInfo __typename } getModuleCoverInformation(goalId: $goalId) { ...ModuleCoverInfo __typename } getP2PChecksInfo(goalId: $goalId) { ...P2PInfo __typename } getStudentCodeReviewByGoalId(goalId: $goalId) { ...StudentsCodeReview __typename } __typename } } fragment ProjectInfo on StudentModule { id moduleTitle finalPercentage finalPoint goalExecutionType displayedGoalStatus accessBeforeStartProgress resultModuleCompletion finishedExecutionDateByScheduler durationFromStageSubjectGroupPlan currentAttemptNumber isDeadlineFree isRetryAvailable localCourseId courseBaseParameters { isGradedCourse __typename } teamSettings { ...teamSettingsInfo __typename } studyModule { id idea duration goalPoint retrySettings { ...RetrySettings __typename } levels { id goalElements { id tasks { id taskId __typename } __typename } __typename } __typename } currentTask { ...CurrentInternshipTaskInfo __typename } __typename } fragment teamSettingsInfo on TeamSettings { teamCreateOption minAmountMember maxAmountMember enableSurrenderTeam __typename } fragment RetrySettings on ModuleAttemptsSettings { maxModuleAttempts isUnlimitedAttempts __typename } fragment CurrentInternshipTaskInfo on StudentTask { id taskId task { id assignmentType studentTaskAdditionalAttributes { cookiesCount maxCodeReviewCount codeReviewCost ciCdMode __typename } checkTypes __typename } lastAnswer { id __typename } teamSettings { ...teamSettingsInfo __typename } __typename } fragment ModuleCoverInfo on ModuleCoverInformation { isOwnStudentTimeline softSkills { softSkillId softSkillName totalPower maxPower currentUserPower achievedUserPower teamRole __typename } timeline { ...TimelineItem __typename } projectStatistics { ...ProjectStatistics __typename } __typename } fragment TimelineItem on ProjectTimelineItem { type status start end children { ...TimelineItemChildren __typename } __typename } fragment TimelineItemChildren on ProjectTimelineItem { type elementType status start end order __typename } fragment ProjectStatistics on ProjectStatistics { registeredStudents inProgressStudents evaluationStudents finishedStudents acceptedStudents failedStudents retriedStudentsPercentage groupProjectStatistics { ...GroupProjectStatistics __typename } __typename } fragment GroupProjectStatistics on GroupProjectStatistics { inProgressTeams evaluationTeams finishedTeams acceptedTeams failedTeams __typename } fragment P2PInfo on P2PChecksInfo { cookiesCount periodOfVerification projectReviewsInfo { ...ProjectReviewsInfo __typename } __typename } fragment ProjectReviewsInfo on ProjectReviewsInfo { reviewByStudentCount relevantReviewByStudentsCount reviewByInspectionStaffCount relevantReviewByInspectionStaffCount __typename } fragment StudentsCodeReview on StudentCodeReviewsWithCountRound { countRound1 countRound2 codeReviewsInfo { maxCodeReviewCount codeReviewDuration codeReviewCost __typename } __typename } ",
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
			"query getProjectAttemptEvaluationsInfo($goalId: ID!, $studentId: UUID!) { school21 { getProjectAttemptEvaluationsInfo_V1(goalId: $goalId, studentId: $studentId) { ...ProjectAttemptEvaluations_V1 __typename } __typename } } fragment ProjectAttemptEvaluations_V1 on ProjectAttemptEvaluationsInfo_V1 { studentAnswerId studentGoalAttemptId attemptStatus attemptResult { ...AtemptResult __typename } team { ...AttemptTeamWithMembers __typename } p2p { ...P2PEvaluation __typename } auto { status receivedPercentage endTimeCheck resultInfo __typename } codeReview { averageMark studentCodeReviews { user { avatarUrl login __typename } finalMark markTime reviewerCommentsCount __typename } __typename } __typename } fragment AtemptResult on StudentGoalAttempt { finalPointProject finalPercentageProject resultModuleCompletion resultDate __typename } fragment AttemptTeamWithMembers on TeamWithMembers { team { id name __typename } members { ...TeamMemberWithRole __typename } __typename } fragment TeamMemberWithRole on TeamMember { role user { ...ProjectTeamMember __typename } __typename } fragment ProjectTeamMember on User { id avatarUrl login userExperience { level { id range { levelCode __typename } __typename } cookiesCount codeReviewPoints __typename } __typename } fragment P2PEvaluation on P2PEvaluationInfo { status checklist { ...Checklist __typename } __typename } fragment Checklist on FilledChecklist { id checklistId endTimeCheck startTimeCheck reviewer { avatarUrl login businessAdminRoles { id school { id organizationType __typename } __typename } __typename } reviewFeedback { ...EvaluationFeedback __typename } comment receivedPoint receivedPercentage quickAction checkType video { ...P2PReviewVideo __typename } __typename } fragment EvaluationFeedback on ReviewFeedback { id comment filledChecklist { id __typename } reviewFeedbackCategoryValues { feedbackCategory feedbackValue id __typename } __typename } fragment P2PReviewVideo on OnlineReviewVideo { link status __typename } ",
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
			"query getProjectGitlabStatus($taskId: ID!) { student { getGitlabLinksWithStatus(taskId: $taskId) { id sshLink httpsLink readyToUse restartsCounter __typename } __typename } } ",
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
			"query calendarGetModule($moduleId: ID!) { student { getModuleById(goalId: $moduleId) { id moduleTitle subjectTitle goalExecutionType trajectory { ...CalendarModuleTrajectory __typename } currentTask { id task { id assignmentType __typename } __typename } __typename } __typename } } fragment CalendarModuleTrajectory on PersonalTrajectory { id levels { id goalElements { id points { id studentTask { ...CalendarStudentTask __typename } __typename } __typename } __typename } __typename } fragment CalendarStudentTask on StudentTask { id taskId task { id studentTaskAdditionalAttributes { ...CalendarStudentTaskAdditionalAttributes __typename } __typename } lastAnswer { id __typename } __typename } fragment CalendarStudentTaskAdditionalAttributes on StudentTaskAdditionalAttributes { cookiesCount __typename } ",
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
			"query calendarGetNameLessStudentTimeslotsForReview($from: DateTime!, $taskId: ID!, $to: DateTime!) { student { getNameLessStudentTimeslotsForReview(from: $from, taskId: $taskId, to: $to) { checkDuration projectReviewsInfo { ...ProjectReviewsInfo __typename } timeSlots { ...CalendarNameLessTimeslot __typename } __typename } __typename } } fragment ProjectReviewsInfo on ProjectReviewsInfo { reviewByStudentCount relevantReviewByStudentsCount reviewByInspectionStaffCount relevantReviewByInspectionStaffCount __typename } fragment CalendarNameLessTimeslot on CalendarNamelessTimeSlot { start end validStartTimes staffSlot __typename } ",
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
			"query bonusesGetBadgesWithFakePublicProfile($userId: UUID) { student { getBadgesWithFakePublicProfile(userId: $userId) { ...UserAchievements __typename } __typename } } fragment UserAchievements on UserBadgeAward { id histories { id rewardDate awardPoints __typename } badge { id kind { id name order __typename } name description avatarUrl bigAvatarUrl __typename } award { id awardCondition { id description __typename } awardBounties { awardBountyId description cookies coins experienceValue coalitionPoints softSkillPowers { softSkillId power softSkill { id name __typename } __typename } __typename } __typename } points isFake __typename } ",
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
			"query getCampusCurrentUser { user { getCurrentUser { id login __typename } __typename } } ",
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
			"query getCampusWorkstation($login: String!) { student { getWorkstationByLogin(login: $login) { id classroomId hostName workstationRow workstationNumber __typename } __typename } } ",
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
			"query getCampusBuildings { student { getBuildings { id name classrooms { id number capacity availableCapacity floor classroomPlan { classroomPlanId planMeta __typename } specializations __typename } __typename } __typename } } ",
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
			"query getCampusPlanOccupied($clusterId: ID!) { student { getClusterPlanStudentsByClusterId(clusterId: $clusterId) { occupiedPlaces { row number stageGroupName stageName user { id login avatarUrl __typename } experience { id value level { id range { id levelCode leftBorder rightBorder __typename } __typename } __typename } studentType __typename } __typename } __typename } } ",
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
			"mutation calendarAddEvent($start: DateTime!, $end: DateTime!) { student { addEventToTimetable(start: $start, end: $end) { ...CalendarEvent __typename } __typename } } fragment CalendarEvent on CalendarEvent { id start end description eventType eventCode eventSlots { id type start end __typename } bookings { ...CalendarReviewBooking __typename } exam { ...CalendarEventExam __typename } studentCodeReview { studentGoalId __typename } activity { ...CalendarEventActivity studentFeedback { id rating comment __typename } status activityType isMandatory isWaitListActive isVisible comments { type createTs comment __typename } organizers { id login __typename } __typename } goals { goalId goalName __typename } penalty { ...Penalty __typename } __typename } fragment CalendarReviewBooking on CalendarBooking { id answerId eventSlotId task { id goalId goalName studentTaskAdditionalAttributes { cookiesCount __typename } assignmentType __typename } eventSlot { id start end event { eventUserRole __typename } __typename } verifierUser { ...CalendarReviewUser __typename } verifiableStudent { id user { ...CalendarReviewUser __typename } __typename } bookingStatus team { ...ProjectTeamMembers __typename } isOnline vcLinkUrl __typename } fragment CalendarReviewUser on User { id login __typename } fragment ProjectTeamMembers on ProjectTeamMembers { id teamLead { ...ProjectTeamMember __typename } members { ...ProjectTeamMember __typename } invitedUsers { ...ProjectTeamMember __typename } teamName teamStatus minTeamMemberCount maxTeamMemberCount __typename } fragment ProjectTeamMember on User { id avatarUrl login userExperience { level { id range { levelCode __typename } __typename } cookiesCount codeReviewPoints __typename } __typename } fragment CalendarEventExam on Exam { examId eventId beginDate endDate name location currentStudentsCount maxStudentCount updateDate goalId goalName isWaitListActive isInWaitList stopRegisterDate __typename } fragment CalendarEventActivity on ActivityEvent { activityEventId eventId name beginDate endDate isRegistered description currentStudentsCount maxStudentCount location updateDate isWaitListActive isInWaitList stopRegisterDate __typename } fragment Penalty on Penalty { comment id duration status startTime createTime penaltySlot { currentStudentsCount description duration startTime id endTime __typename } reasonId __typename } ",
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
			"query getActivityTypes { school21 { getActivityTypes { id description category __typename } __typename } } ",
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
			"query getStageInfo { user { getCurrentUser { id studentRoles { status school { organizationType __typename } stageGroup { classSubjects { stage { name __typename } __typename } name stage isActive __typename } __typename } __typename } getAllStagesTenantAware { id name __typename } __typename } } ",
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
			"query getUsers($userIds: [UUID!]!) { school21 { getUsers(userIds: $userIds) { userId login firstName middleName lastName avatarUrl level __typename } __typename } } ",
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
			"query getMySuggestedActivities($page: PagingInput!, $statuses: [ParticipantEventStatus]) { school21 { getMySuggestedActivities(page: $page, statuses: $statuses) { id start end eventType description eventCode activity { organizers { id login __typename } eventCreator { id login __typename } comments { type createTs comment __typename } averageFeedbackRating isVisible activityType status activityEventId eventId name description location currentStudentsCount maxStudentCount isRegistered isInWaitList isWaitListActive stopRegisterDate beginDate endDate __typename } __typename } __typename } } ",
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
			"mutation subscribeToEvent($eventId: ID!) { student { subscribeToEvent(eventId: $eventId) { ...UpcomingEvent __typename } __typename } } fragment UpcomingEvent on CalendarEvent { id start end bookings { id task { id goalName __typename } __typename } eventSlots { id eventId type start end __typename } maxStudentCount location ipRange eventType eventCode description externalId currentStudentsCount exam { examId eventId beginDate endDate location ip maxStudentCount isVisible name goalId isWaitListActive isInWaitList currentStudentsCount createDate updateDate schoolId stopRegisterDate isRegistered goalName eventType registrationAccessStatus __typename } studentCodeReview { studentGoalId __typename } activity { activityEventId eventId beginDate endDate location description maxStudentCount isVisible name isWaitListActive isInWaitList currentStudentsCount createDate updateDate schoolId stopRegisterDate isRegistered activityType eventType isMandatory status organizers { id login __typename } __typename } penalty { ...Penalty __typename } __typename } fragment Penalty on Penalty { comment id duration status startTime createTime penaltySlot { currentStudentsCount description duration startTime id endTime __typename } reasonId __typename } ",
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
			"mutation unsubscribeFromEvent($eventId: ID!) { student { unsubscribeFromEvent(eventId: $eventId) { ...UpcomingEvent __typename } __typename } } fragment UpcomingEvent on CalendarEvent { id start end bookings { id task { id goalName __typename } __typename } eventSlots { id eventId type start end __typename } maxStudentCount location ipRange eventType eventCode description externalId currentStudentsCount exam { examId eventId beginDate endDate location ip maxStudentCount isVisible name goalId isWaitListActive isInWaitList currentStudentsCount createDate updateDate schoolId stopRegisterDate isRegistered goalName eventType registrationAccessStatus __typename } studentCodeReview { studentGoalId __typename } activity { activityEventId eventId beginDate endDate location description maxStudentCount isVisible name isWaitListActive isInWaitList currentStudentsCount createDate updateDate schoolId stopRegisterDate isRegistered activityType eventType isMandatory status organizers { id login __typename } __typename } penalty { ...Penalty __typename } __typename } fragment Penalty on Penalty { comment id duration status startTime createTime penaltySlot { currentStudentsCount description duration startTime id endTime __typename } reasonId __typename } ",
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
			"query publicProfileGetProjects($studentId: UUID!, $stageGroupId: ID!) { school21 { getStudentProjectsForPublicProfileByStageGroup( studentId: $studentId stageGroupId: $stageGroupId ) { groupName name experience finalPercentage goalId goalStatus amountAnswers amountReviewedAnswers __typename } __typename } } ",
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
			"query publicProfileGetCredentialsByLogin($login: String!) { school21 { getStudentByLogin(login: $login) { studentId userId schoolId isActive isGraduate __typename } __typename } } ",
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
			"query bonusesGetUserIdByLogin($login: String!) { student { getUserIdByLogin(login: $login) __typename } } ",
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
			"query competitionCoalitionGetUserTournament { student { getUserTournamentWidget { coalitionMember { coalition { ...CompetitionCurrentCoalition __typename } __typename } lastTournamentResult { id __typename } __typename } __typename } } fragment CompetitionCurrentCoalition on GameCoalition { id name avatarUrl backgroundUrl backgroundUrlBig memberCount color currentTournament { points tournament { name timeStart timeEnd __typename } __typename } masterUser { login avatarUrl __typename } __typename } ",
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
			"query competitionCoalitionGetMyCoalitionMembers($page: PagingInput) { student { getUserTournamentWidget { getMyCoalitionMembers(page: $page) { user { id login avatarUrl userExperience { level { id levelCode __typename } __typename } __typename } __typename } __typename } __typename } } ",
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
			"query getPenaltyList($statuses: [String]!, $from: DateTime, $to: DateTime, $sorting: SortingField, $page: PagingInput!) { school21 { getMyPenalties( statuses: $statuses from: $from to: $to sorting: $sorting page: $page ) { ...Penalty __typename } getPenaltyReasons { id name __typename } countMyPenalties(statuses: $statuses) __typename } } fragment Penalty on Penalty { comment id duration status startTime createTime penaltySlot { currentStudentsCount description duration startTime id endTime __typename } reasonId __typename } ",
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
			"query getPenaltiesCount($statuses: [String]!) { school21 { countMyPenalties(statuses: $statuses) __typename } } ",
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
			"query getGraphCurrentType($userId: ID!, $schoolId: ID!) { student { getStudentCurrentStageWithGraphType(userId: $userId, schoolId: $schoolId) { id graphType __typename } __typename } } ",
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
			"query getGraphBasisGoals($studentId: UUID!) { student { getBasisGraph(studentId: $studentId) { isIntensiveGraphAvailable graphNodes { ...BasisGraphNode __typename } __typename } __typename } } fragment BasisGraphNode on GraphNode { graphNodeId nodeCode studyDirections { id name color textColor __typename } entityType entityId goal { goalExecutionType projectState projectName projectDescription projectPoints projectDate duration isMandatory __typename } course { courseType projectState projectName projectDescription projectPoints projectDate duration localCourseId __typename } parentNodeCodes __typename } ",
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
			"query getTasks($ids: [ID!]!) { student { getTasksByIds(ids: $ids) { ...StudentTaskInProject __typename } __typename } } fragment StudentTaskInProject on StudentTask { id task { id content { id body __typename } __typename } __typename } ",
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
			"query getGitlabLink($taskId: ID!) { student { getLinkToPrivateStudentGitlabProjectByTaskId(taskId: $taskId) { sshLink hasOpenedMR httpsLink __typename } __typename } } ",
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
			"mutation createFeedbackOnEvaluation($reviewFeedbackInput: ReviewFeedbackInput!) { student { createReviewFeedback(reviewFeedbackInput: $reviewFeedbackInput) { ...EvaluationFeedback __typename } __typename } } fragment EvaluationFeedback on ReviewFeedback { id comment filledChecklist { id __typename } reviewFeedbackCategoryValues { feedbackCategory feedbackValue id __typename } __typename } ",
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
			"query getProjectTeamWithMembers($goalId: ID!) { student { getProjectTeamWithMembers(goalId: $goalId) { ...TeamWithMembers __typename } __typename } } fragment TeamWithMembers on ProjectTeamWithMembers { teamWithMembers { team { id name status minTeamMemberCount maxTeamMemberCount __typename } members { ...TeamMemberWithRole __typename } __typename } invitedStudents { student { user { ...ProjectTeamMember __typename } __typename } __typename } __typename } fragment TeamMemberWithRole on TeamMember { role user { ...ProjectTeamMember __typename } __typename } fragment ProjectTeamMember on User { id avatarUrl login userExperience { level { id range { levelCode __typename } __typename } cookiesCount codeReviewPoints __typename } __typename } ",
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
			"query getIsDisbandRequestAlreadySent($teamId: UUID!) { student { isRequestBeenSentToTeamDisband(teamId: $teamId) __typename } } ",
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
			"query getGitlabSettingsToken($taskId: ID!) { student { getLinkToPrivateStudentGitlabProjectByTaskId(taskId: $taskId) { runnersToken __typename } __typename } } ",
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
			"mutation cancelInvitation($teamId: UUID!, $userId: ID!) { student { cancelInvitation(teamId: $teamId, userId: $userId) { ...StudentInvitationInfo __typename } __typename } } fragment StudentInvitationInfo on StudentInvitationInfo { student { ...AvailableStudentForTeam __typename } invitationStatus __typename } fragment AvailableStudentForTeam on Student { id user { id login avatarUrl userExperience { ...CurrentUserExperience __typename } __typename } __typename } fragment CurrentUserExperience on UserExperience { id cookiesCount codeReviewPoints coinsCount level { id range { id levelCode __typename } __typename } __typename } ",
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
			"query getAvailableStudentsForTeams($goalId: ID!) { student { getAvailableStudentsForTeam(goalId: $goalId) { ...StudentInvitationInfo __typename } __typename } } fragment StudentInvitationInfo on StudentInvitationInfo { student { ...AvailableStudentForTeam __typename } invitationStatus __typename } fragment AvailableStudentForTeam on Student { id user { id login avatarUrl userExperience { ...CurrentUserExperience __typename } __typename } __typename } fragment CurrentUserExperience on UserExperience { id cookiesCount codeReviewPoints coinsCount level { id range { id levelCode __typename } __typename } __typename } ",
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
			"mutation sendInvitation($teamId: UUID!, $userId: ID!) { student { sendInvitation(teamId: $teamId, userId: $userId) { ...StudentInvitationInfo __typename } __typename } } fragment StudentInvitationInfo on StudentInvitationInfo { student { ...AvailableStudentForTeam __typename } invitationStatus __typename } fragment AvailableStudentForTeam on Student { id user { id login avatarUrl userExperience { ...CurrentUserExperience __typename } __typename } __typename } fragment CurrentUserExperience on UserExperience { id cookiesCount codeReviewPoints coinsCount level { id range { id levelCode __typename } __typename } __typename } ",
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
			"mutation removeP2P($bookingId: ID!) { student { removeBookingFromEventSlot(bookingId: $bookingId) __typename } } ",
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
			"query calendarGetExams($from: DateTime!, $to: DateTime!) { student { getExams(from: $from, to: $to) { ...CalendarExam __typename } __typename } } fragment CalendarExam on Exam { examId eventId beginDate endDate name location maxStudentCount currentStudentsCount updateDate goalId goalName isWaitListActive isInWaitList stopRegisterDate __typename } ",
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
