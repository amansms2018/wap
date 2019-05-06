
public   class Quiz {

    public Quiz() {
    }

    public static String[] getQuestions() {
        return questions;
    }

    public static String[] questions =
                    {"3, 1, 4, 1,5",
                    "1, 1, 2, 3,5",
                    "1,4,9,16,25",
                    "2, 3, 5,7,11",
                    "1,2,4,8,16"};

    public static int[] answers = {9, 8, 36, 13, 32};

    public static int computeScore(int queNum, int ans) {
        switch (queNum ) {

            case 0:
                if (answers[queNum] == ans) return + 1;
            case 1:
                if (answers[queNum] == ans) return + 1;
                case2:
                if (answers[queNum] == ans) return  + 1;
                break;
            case 2:
                if (answers[queNum] == ans) return  + 1;
                break;
            case 3:
                if (answers[queNum] == ans) return 1;
                break;
            case 4:
                if (answers[queNum] == ans) return  1;
                break;
        }

        return 0;

    }

}
