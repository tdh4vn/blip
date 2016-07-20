// relating to signup
export const ERR_ACCOUNT_ALREADY_EXISTS = 'That e-mail address already has an account.';
// relating to login
export const ERR_LOGIN_CREDS = 'Wrong username or password.';
// this one doesn't get surfaced to user; instead we redirect to /email-verification
export const ERR_EMAIL_NOT_VERIFIED = 'Looks like your e-mail address has not been verified.';

// relating to care team invitations
export const ERR_ALREADY_SENT_TO_EMAIL = 'Looks like you\'ve already sent an invitation to that email.';

export const SIGNUP_ERROR = 'An error occurred while signing up.';

// these get assigned based on HTTP status codes
// default
export const ERR_GENERIC = 'Sorry! Something went wrong. It\'s our fault, not yours. We\'re going to investigate.';
// 401
export const ERR_AUTHORIZATION = 'Something went wrong with your account authorization. Maybe try logging out and then logging back in? If you\'re still having issues then please contact support.';
// 500
export const ERR_SERVICE_DOWN = 'Sorry! Something went wrong. It\'s our fault, not yours. We\'re going to go investigate. Please try again in a few moments.';
// 503
export const ERR_OFFLINE = 'Sorry but it appears that you are offline. Blip requires that you be connected to the internet.';

// and fallbacks with some info about the step involved when the error happened (useful for debugging)
export const ERR_ACCEPTING_INVITE = 'Something went wrong while accepting a received care team invitation.';
export const ERR_ACCEPTING_TERMS = 'Something went wrong while accepting the terms and conditions.';
export const ERR_ACCOUNT_NOT_CONFIGURED = 'Sorry! It appears that this account hasn\'t been fully set up. Please notify the account owner that data storage may not be set up for this account.';
export const ERR_CANCELLING_INVITE = 'Something went wrong while cancelling an outgoing care team invitation.';
export const ERR_CHANGING_PERMS = 'Something went wrong while changing care team member permissions.';
export const ERR_CONFIRMING_PASSWORD_RESET = 'We couldn\'t change your password. You may have mistyped your email, or the reset link may have expired.';
export const ERR_CONFIRMING_SIGNUP = 'Something went wrong while confirming your sign-up.';
export const ERR_DSA_SETUP = 'Something went wrong while setting up data storage.';
export const ERR_FETCHING_MESSAGE_THREAD = 'Something went wrong while fetching a message thread.';
export const ERR_FETCHING_PATIENT = 'Something went wrong while fetching patient.';
export const ERR_FETCHING_PATIENT_DATA = 'Something went wrong while fetching data for the current patient.';
export const ERR_FETCHING_PATIENTS = 'Something went wrong while fetching patients.';
export const ERR_FETCHING_PENDING_RECEIVED_INVITES = 'Something went wrong while fetching received invitations to others\' care teams.';
export const ERR_FETCHING_PENDING_SENT_INVITES = 'Something went wrong while fetching pending outgoing care team invitations.';
export const ERR_FETCHING_USER = 'Something went wrong while fetching user.';
export const ERR_LOGIN = 'An error occurred while logging in.';
export const ERR_REJECTING_INVITE = 'Something went wrong while rejecting a received care team invitation.';
export const ERR_REMOVING_MEMBER = 'Something went wrong trying to remove a member from a care team.';
export const ERR_REMOVING_MEMBERSHIP = 'Something went wrong trying to leave a care team.';
export const ERR_REQUESTING_PASSWORD_RESET = 'Something went wrong trying to request a password reset e-mail.';
export const ERR_RESENDING_EMAIL_VERIFICATION = 'Something went wrong trying to resend verification e-mail.';
export const ERR_SENDING_INVITE = 'Something went wrong sending an outgoing invitation to a care team.';
export const ERR_SIGNUP = 'Something went wrong trying to sign you up.';
export const ERR_UPDATING_PATIENT = 'Something went wrong while saving patient profile.';
export const ERR_UPDATING_USER = 'Something went wrong while updating user account.';
export const ERR_YOUR_ACCOUNT_NOT_CONFIGURED = 'Sorry! It appears that your account hasn\'t been fully set up.';

export const ERR_BIRTHDAY_INVALID = 'Birthday is invalid.';
export const ERR_BIRTHDAY_MISSING = 'Birthday is required.';
export const ERR_BIRTHDAY_MISMATCH = 'The birthday specified does not match what is in our system. Please contact the clinic that created your account and ask them to update your birthday.';
export const ERR_PASSWORD_MISSING = 'Password is required.';
export const ERR_PASSWORD_INVALID = 'Password is invalid.';

export const VERIFY_CUSTODIAL_ERRORS = {
  1001: ERR_PASSWORD_MISSING,
  1002: ERR_PASSWORD_MISSING,
  1003: ERR_PASSWORD_INVALID,
  1004: ERR_BIRTHDAY_MISSING,
  1005: ERR_BIRTHDAY_INVALID,
  1006: ERR_BIRTHDAY_MISMATCH
};
